
//eventlisteners on those 7 buttons

for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        makesound(this.innerText);

        buttonAnimation(this.innerText);
    })

}

document.addEventListener("keypress", function(e){
    console.log(e);
})


//if same keys are pressed through keyboard, then to produce same sound, keypress eventlistener should be added

document.addEventListener("keypress", function(event){
    makesound(event.key);

    buttonAnimation(event.key);

    //key is the predefined keyword here that gives the character value of the key pressed on the keyboard.
})



function makesound(value){

    switch(value){

        case "w":   var audio = new Audio("/sounds/crash.mp3");
                    audio.play();
                    break;

        case "a":   var audio = new Audio("/sounds/kick-bass.mp3");
                    audio.play();
                    break;

        case "s":   var audio = new Audio("/sounds/snare.mp3");
                    audio.play();
                    break;

        case "d":   var audio = new Audio("/sounds/tom-1.mp3");
                    audio.play();
                    break;

        case "j":   var audio = new Audio("/sounds/tom-2.mp3");
                    audio.play();
                    break;

        case "k":   var audio = new Audio("/sounds/tom-3.mp3");
                    audio.play();
                    break;

        case "l":   var audio = new Audio("/sounds/tom-4.mp3");
                    audio.play();
                    break;

        default:    console.log(value);
        
    }
}


//to style the buttons that are pressed from the keyboard or clicked on webpage

function buttonAnimation(keypressed){

    var activeKey = document.querySelector("." + keypressed);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");

    }, 100);    
}






























