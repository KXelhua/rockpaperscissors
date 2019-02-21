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
    randomNumber=Math.floor(Math.random()*3);
    $("#computerChoice").text(computerChoice);
    if (randomNumber===0){
        computerChoice="rock";
    } else if (randomNumber===1) {
        computerChoice="paper";
        $("#computerChoice").text(computerChoice);
    } else if (randomNumber===2) {
        computerChoice="scissors";
        $("#computerChoice").text(computerChoice);
    }
   
   if (computerChoice==="rock" && userChoice==="scissors" || computerChoice==="paper" && userChoice==="rock" || computerChoice==="scissors" && userChoice==="paper"){
        $("#result").text("Computer Beats User!");
    } else if (userChoice==="rock" && computerChoice==="scissors" || userChoice==="paper" && computerChoice==="rock" || computerChoice==="paper" && userChoice==="scissors" ){
         $("#result").text("User Beats Computer"); 
    } else {
        $("#result").text("It's a tie!"); 
    } 
 
 var input = document.getElementById("input1");
    input.value == ""
    
});
});



