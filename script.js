/*
var for prompts (multi)
var for string of words to compare
var user input
var start
var maxchar = 1
var start time = 60

local storage 
    wins
    losses


Have a start buttom
     opens prompt

1st prompt: hint - character amount = maxchar

keypress = input key = true
keypress = input key = false

if input equal true
    show character
    
else decriment time and choose another character  


    character input 
        1 character max

darkmode/ligth mode toggle - once

keyup event - toggles hidden letter

    when time equal 0 = endgame, end increment losses
    when all characters are true = end game
add increment win or loss

function: endgame
when game ends when all key imputs are true, or time = 0
display scores
------------------------------------------------------------------------------
*/


var keyPress =""
var timeLeft = document.querySelector("html.timeLeft");
var wins = document.querySelector("html.wins");
var losses = document.querySelector("html.losses");
var answerInput = document.querySelector("answerInput");
var button = document.querySelector("html.button");

//button.addEventListener("click", function(event) {

//});

addEventListener("keyup", function(event){
    if(keyupAction === true){
        // reveal correct letter
        timeLeft++
    }
    else{
        timeLeft--
    }
})

function endGame(){
    if(timeLeft.value === 0){
        losses++
    }
    else{
        wins++
    }
};


//------------------------------------------------


/*

*************AZ added code

function keyupAction(event1) {
    console.log(event1);
    var keyPress = event1.key;
    var keyCode = event1.code;
    //document.querySelector(".box").textContent = keyPress;
    document.querySelector(".box").textContent = keyCode;
}

document.addEventListener("onKeyup", keyupAction);
/*---- FYI if you comment out the code below the boxes will display-------------------------------------

    var container = document.querySelector(".boxcontainer");

    container.addEventListener("keyupAction", function(event) { 
    var element = event.target;

//container.addEventListener("#key-events", "".testContent = keyPress);
 
    if (element.matches(".box")) {

    var state = element.getAttributre("data-state");

        if (state === "hidden") {
            element.textContent = element/getAttributre("data-number");
            element.setattribute ( "data-state", "hidden");

        }else {
            element.textContent = element.getAttributre("data-number");
            element.setattribute("data-state", "hidden");
        }
    }
})  

   
