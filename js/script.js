// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice="";
var computerChoice="";
var winner="";
var randomNumber=0;

// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    $("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
    userChoice=$("#input").val();
        $("#userChoice").text(userChoice);
    randomNumber=Math.Floor(Math.random())*3;
    computerChoice=$(Math.Floor(Math.random())*3).val();
        $("#computerChoice").text(computerChoice);
    if (randomNumber===0){
        computerChoice="rock";
        $("#computerChoice").text(computerChoice);
    } else if (randomNumber===1) {
        computerChoice="paper";
        $("#computerChoice").text(computerChoice);
    } else if (randomNumber===2) {
        computerChoice="scissors";
        $("#computerChoice").text(computerChoice);
    }
});
});



