var startGame = document.querySelector("#startGame");
var reset = document.querySelector("#reset");
var time_sec = document.getElementById("time_sec");
var QuizQuestions = document.querySelector(".Quizquestions");

var Score = document.querySelector("#Score");
var resetButton = document.querySelector("#resetButton");
var startButton = document.querySelector("#startbutton");




var scorecounter =0;
var timer;
var timerCount;
var Userchoice;
var interval;
var ans;



function gameStart(){
  timerCount = 20;
  console.log("inside start game");
  document.getElementById("Q1").style.display="block";
  startTimer();
  
}



 function startTimer(){
  timer = setInterval(function(){
    timerCount--;
    time_sec.innerHTML = timerCount;
    if (timerCount ==0){
      Gameover();
      clearInterval(timer);
     }
  },1000);
  console.log("inside start timer");
  console.log("timerCount="+timerCount);
  
  }

function increasescore(index){
scorecounter= scorecounter+1;
max ="10";
Score.innerHTML="Score: "+scorecounter;
nextQuestion(index);
}

function decreasetime(){
  timerCount=timerCount-5;
}

function nextQuestion(index){
if (index<4){
  document.getElementsByClassName("questions")[index+1].style.display="block";
}
}


function Gameover(){
  document.getElementById("Gameover").style.display="block";
document.getElementById("Gameover").innerHTML ="GameOver";
document.getElementById("initials").style.display="block";
document.getElementById("Score").style.display="block";
}

startButton.addEventListener("click", startGame);

