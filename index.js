
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAddAnimation(event.key);


});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAddAnimation(buttonInnerHTML);

    
    });
}

function buttonAddAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 0.1*1000);

}

function makeSound(key) {
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":    
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}



//operator use in js
/* 
    function add(num1, num2) {
        return num1 + num2;
    }
    function multiply(num1, num2) {
        return num1 * num2;
    }
    function calculate(num1, num2, operator) {
        return operator(num1, num2);
    } 
*/
