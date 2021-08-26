var player1 = true; 
var player2 = false;
var turns = 0;
var tie = false;
function o(){
    if (document.getElementById("button1").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("button1").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("button1").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("button1").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
}
function t(){
    if (document.getElementById("button2").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("button2").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("button2").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("button2").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
}
function th(){
    if (document.getElementById("button3").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("button3").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("button3").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("button3").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
}
function fo(){
    if (document.getElementById("button4").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("button4").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("button4").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("button4").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
} 
function fi(){
    if (document.getElementById("button5").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("button5").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("button5").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("button5").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
} 
function si(){
    if (document.getElementById("button6").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("button6").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("button6").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("button6").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
}
function seven(){
    if (document.getElementById("b7").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("b7").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("b7").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("b7").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
}
function eight(){
    if (document.getElementById("b8").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("b8").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("b8").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("b8").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
}
function nine(){
    if (document.getElementById("b9").innerHTML == "X"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
    else if (document.getElementById("b9").innerHTML == "O"){
        document.getElementById("paragraph").innerHTML = "You cannot click on a button more than once";
        turns = turns + 0;
    }
     else if (player1 == true && player2 == false){
        document.getElementById("b9").innerHTML = "X";
        document.getElementById("paragraph").innerHTML = "Player 2's turn";
        player1 = false;
        player2 = true;
        turns = turns + 1;
    }
    else if (player1 == false && player2 == true){
        document.getElementById("b9").innerHTML = "O";
        document.getElementById("paragraph").innerHTML = "Player 1's turn";
        player1 = true;
        player2 = false;
        turns = turns + 1;
    }
    c();
}
function clear(){
    document.getElementById("button1").innerHTML = "";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = "";
    document.getElementById("button4").innerHTML = "";
    document.getElementById("button5").innerHTML = "";
    document.getElementById("button6").innerHTML = "";
    document.getElementById("b7").innerHTML = "";
    document.getElementById("b8").innerHTML = "";
    document.getElementById("b9").innerHTML = "";
    document.getElementById("button1").style.backgroundColor = "white";
    document.getElementById("button2").style.backgroundColor = "white";
    document.getElementById("button3").style.backgroundColor = "white";
    document.getElementById("button4").style.backgroundColor = "white";
    document.getElementById("button5").style.backgroundColor = "white";
    document.getElementById("button6").style.backgroundColor = "white";
    document.getElementById("b7").style.backgroundColor = "white";
    document.getElementById("b8").style.backgroundColor = "white";
    document.getElementById("b9").style.backgroundColor = "white";
}
function c(){
    if (document.getElementById("button1").innerHTML == "X"){
        if (document.getElementById("button2").innerHTML == "X"){
            if (document.getElementById("button3").innerHTML == "X"){
                 document.getElementById("paragraph").innerHTML = "Player 1 wins";
                 setTimeout(function(){
                     document.getElementById("paragraph").innerHTML = "Player 2's turn";
                }, 2500);
                    document.getElementById("button1").style.backgroundColor = "yellow";
                    document.getElementById("button2").style.backgroundColor = "yellow";
                    document.getElementById("button3").style.backgroundColor = "yellow";
                 setTimeout(function() {
                    clear();
                    document.getElementById("paragraph").innerHTML = "New round";
                }, 1000); 
                turns = 0;
                tie = false;
        }
    }
}
if (document.getElementById("button1").innerHTML == "O"){
    if (document.getElementById("button2").innerHTML == "O"){
        if (document.getElementById("button3").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("button1").style.backgroundColor = "yellow";
                document.getElementById("button2").style.backgroundColor = "yellow";
                document.getElementById("button3").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button4").innerHTML == "X"){
    if (document.getElementById("button5").innerHTML == "X"){
        if (document.getElementById("button6").innerHTML == "X"){
             document.getElementById("paragraph").innerHTML = "Player 1 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 2's turn";
            }, 2500);
                document.getElementById("button4").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("button6").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button4").innerHTML == "O"){
    if (document.getElementById("button5").innerHTML == "O"){
        if (document.getElementById("button6").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("button4").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("button6").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("b7").innerHTML == "X"){
    if (document.getElementById("b8").innerHTML == "X"){
        if (document.getElementById("b9").innerHTML == "X"){
             document.getElementById("paragraph").innerHTML = "Player 1 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 2's turn";
            }, 2500);
                document.getElementById("b7").style.backgroundColor = "yellow";
                document.getElementById("b8").style.backgroundColor = "yellow";
                document.getElementById("b9").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("b7").innerHTML == "O"){
    if (document.getElementById("b8").innerHTML == "O"){
        if (document.getElementById("b9").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("b7").style.backgroundColor = "yellow";
                document.getElementById("b8").style.backgroundColor = "yellow";
                document.getElementById("b9").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button1").innerHTML == "X"){
    if (document.getElementById("button4").innerHTML == "X"){
        if (document.getElementById("b7").innerHTML == "X"){
             document.getElementById("paragraph").innerHTML = "Player 1 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 2's turn";
            }, 2500);
                document.getElementById("button1").style.backgroundColor = "yellow";
                document.getElementById("button4").style.backgroundColor = "yellow";
                document.getElementById("b7").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button1").innerHTML == "O"){
    if (document.getElementById("button4").innerHTML == "O"){
        if (document.getElementById("b7").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("button1").style.backgroundColor = "yellow";
                document.getElementById("button4").style.backgroundColor = "yellow";
                document.getElementById("b7").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button2").innerHTML == "X"){
    if (document.getElementById("button5").innerHTML == "X"){
        if (document.getElementById("b8").innerHTML == "X"){
             document.getElementById("paragraph").innerHTML = "Player 1 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 2's turn";
            }, 2500);
                document.getElementById("button2").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("b8").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button2").innerHTML == "O"){
    if (document.getElementById("button5").innerHTML == "O"){
        if (document.getElementById("b8").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("button2").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("button8").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button3").innerHTML == "X"){
    if (document.getElementById("button6").innerHTML == "X"){
        if (document.getElementById("b9").innerHTML == "X"){
             document.getElementById("paragraph").innerHTML = "Player 1 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 2's turn";
            }, 2500);
                document.getElementById("button3").style.backgroundColor = "yellow";
                document.getElementById("button6").style.backgroundColor = "yellow";
                document.getElementById("b9").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button3").innerHTML == "O"){
    if (document.getElementById("button6").innerHTML == "O"){
        if (document.getElementById("b9").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("button3").style.backgroundColor = "yellow";
                document.getElementById("b9").style.backgroundColor = "yellow";
                document.getElementById("button6").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button1").innerHTML == "X"){
    if (document.getElementById("button5").innerHTML == "X"){
        if (document.getElementById("b9").innerHTML == "X"){
             document.getElementById("paragraph").innerHTML = "Player 1 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 2's turn";
            }, 2500);
                document.getElementById("button1").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("b9").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button1").innerHTML == "O"){
    if (document.getElementById("button5").innerHTML == "O"){
        if (document.getElementById("b9").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("button1").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("b9").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button3").innerHTML == "X"){
    if (document.getElementById("button5").innerHTML == "X"){
        if (document.getElementById("b7").innerHTML == "X"){
             document.getElementById("paragraph").innerHTML = "Player 1 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 2's turn";
            }, 2500);
                document.getElementById("button3").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("b7").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (document.getElementById("button3").innerHTML == "O"){
    if (document.getElementById("button5").innerHTML == "O"){
        if (document.getElementById("b7").innerHTML == "O"){
             document.getElementById("paragraph").innerHTML = "Player 2 wins";
             setTimeout(function(){
                 document.getElementById("paragraph").innerHTML = "Player 1's turn";
            }, 2500);
                document.getElementById("button3").style.backgroundColor = "yellow";
                document.getElementById("button5").style.backgroundColor = "yellow";
                document.getElementById("b7").style.backgroundColor = "yellow";
             setTimeout(function() {
                clear();
                document.getElementById("paragraph").innerHTML = "New round";
            }, 1000); 
            turns = 0;
            tie = false;
    }
}
}
if (turns == 9 && tie == false){
    document.getElementById("paragraph").innerHTML = "Tie";
    setTimeout(function(){
        if (player1 == true && player2 == false){
            document.getElementById("paragraph").innerHTML = "Player 2's turn";
            player1 = false;
            player2 = true;
        }else if (player1 == false && player2 == true){
            document.getElementById("paragraph").innerHTML = "Player 1's turn";
            player1 = true;
            player2 = false;
        }
   }, 2500);
   setTimeout(function(){
       clear();
       document.getElementById("paragraph").innerHTML = "New round";
   }, 1000);
   turns = 0;
   tie = false;
}
}