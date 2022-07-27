function startGame() {
    //hide start button
    document.getElementById("start").style.display = "none";

    //set score and combo to 0
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("combo").innerHTML = "Combo: 0";

    //start audio (Arcade got 75 Bpm! Therefor create every 1.25s a new Note)
    const audio = new Audio("Music_Arcade.mp3");
    audio.play();

    //create notes
    let newNote = document.createElement("div");
    newNote.className = "noteStyle noteJ";
    newNote.id = "note0";
    document.getElementById("background").appendChild(newNote);
    moveNotes(newNote)
}

//function for moving the notes
async function moveNotes(newNote) {
    let objStyle = window.getComputedStyle(newNote);
    let topValue = objStyle.getPropertyValue("top").replace("px", "");

    for(let i = newNote.style.top; i<750; i++){
        newNote.style.top  = i + "px";
        await delay(10);
    }
    document.getElementById("background").removeChild(newNote);
}

// delay for moving
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}