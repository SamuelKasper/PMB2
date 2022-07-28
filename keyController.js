document.addEventListener('keypress', (key) => {
    if(key.key == "d"){
        document.getElementById("btn1").style.backgroundColor = "gray";
 
    }else if(key.key == "f"){
        document.getElementById("btn2").style.backgroundColor = "gray";
    
    }else if(key.key == "j"){
        document.getElementById("btn3").style.backgroundColor = "gray";
 
    }else if(key.key == "k"){
        document.getElementById("btn4").style.backgroundColor = "gray";
    }
});

document.addEventListener('keyup', (key) =>{
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "white";
});

function checkHit(){

}