function startGame(){
    //hide start button
    document.getElementById("start").style.display = "none";

    //set score and combo to 0
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("combo").innerHTML = "Combo: 0";

    //start audio
    const audio = new Audio("Music_Arcade.mp3");
    audio.play();

    //create notes
    let newNote = document.createElement("div");
    newNote.className = "noteStyle noteJ";
    newNote.id="note0";
    document.getElementById("background").appendChild(newNote);
    moveNotes(newNote)
}

function moveNotes(note){
    let objStyle = window.getComputedStyle(note);
    let topValue = objStyle.getPropertyValue("top").replace("px","");
    console.log("test" + topValue);
    //while(objStyle.getPropertyValue("top").replace("px","") < topValue){
        note.style.top += 200 + "px";
    //}
}