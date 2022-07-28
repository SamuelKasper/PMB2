//combo and score
let combo = 0;
let score = 0;

function startGame() {
    //config variables
    let noteAmount = 60;
    // must both be multiplied with 795 a multiple of 400ms.
    let delayBetweenNotes = 800;
    //possible values: 1.0062, 1.51, 2.0126
    let delayNoteMovement = 2.0126;

    //hide start button
    document.getElementById("start").style.display = "none";

    //set score and combo to 0
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("combo").innerHTML = "Combo: 0";

    //start audio (Arcade got 75 Bpm! Therefor create every 1.25s a new Note)
    const audio = new Audio("Music_Arcade.mp3");
    audio.play();
    noteHandler(noteAmount, delayBetweenNotes, delayNoteMovement);
}

//create new notes with specific delay
async function noteHandler(noteAmount, delayBetweenNotes, delayNoteMovement) {
    for (let i = 0; i < noteAmount; i++) {
        //create random value 0-3 to decide on which lane the note should spawn
        let rnd = Math.floor(Math.random() * 4);
        let noteLane = "";
        if (rnd == 1) {
            noteLane = "noteF";
        } else if (rnd == 2) {
            noteLane = "noteJ";
        } else if (rnd == 3) {
            noteLane = "noteK";
        }
        //create notes
        let newNote = document.createElement("div");
        newNote.className = `noteStyle ${noteLane}`;
        newNote.id = `note${i}`;
        document.getElementById("background").appendChild(newNote);
        moveNotes(newNote, delayNoteMovement)
        //delay has to set for every song specific
        await delay(delayBetweenNotes);
    }
}

//function for moving the notes and check if a note is hit
async function moveNotes(newNote, delayNoteMovement) {
    let removed = false;
    for (let i = newNote.style.top; i < 800; i++) {
        //check if note is hit
        if (i > 775) {
            let obj;
            let classString = newNote.className + "";
            if (classString.includes("noteF")) {
                obj = document.getElementById("btn2");
            } else if (newNote.className.includes("noteJ")) {
                obj = document.getElementById("btn3");
            } else if (newNote.className.includes("noteK")) {
                obj = document.getElementById("btn4");
            } else { obj = document.getElementById("btn1"); }

            //check if hit and update score and combo
            let style = getComputedStyle(obj);
            if (style["background-color"] == "rgb(128, 128, 128)") {
                combo = combo + 1;
                score = score + 10 * combo;
                document.getElementById("combo").innerHTML = `Combo: ${combo}`;
                document.getElementById("score").innerHTML = `Score: ${score}`;
                document.getElementById("background").removeChild(newNote);
                removed = true;
                break;
            }
        }
        //move note and wait
        await delay(delayNoteMovement);
        newNote.style.top = i + "px";
    }
    if (!removed) {
        document.getElementById("background").removeChild(newNote);
        combo = 0;
        document.getElementById("combo").innerHTML = `Combo: ${combo}`;
    }
}

// delay for moving
function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n);
    });
}