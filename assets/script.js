// Here we defined some of our variables 
var startGame = document.querySelector("#startGame");
var reset = document.querySelector("#reset");
var time_sec = document.getElementById("time_sec");
var QuizQuestions = document.querySelector(".Quizquestions");
var Initials=document.querySelector("Initials");
var Score = document.querySelector("#Score");
var startButton = document.querySelector("#startbutton");




var scorecounter =0;
var timer;
var timerCount;
var Userchoice;
var interval;
var ans;


//This is the first main function that is meant to start the game
function gameStart(){
  timerCount = 20;
  console.log("inside start game");
  document.getElementById("Q1").style.display="block";
  startTimer();
  
}


//This function starts the timer it is called by the gaestart function
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

  //this function is responsible for increasing the users score when they get a question right
function increasescore(index){
scorecounter= scorecounter+1;
Score.innerHTML="Score: "+scorecounter;
nextQuestion(index);
}

//this reduces the timer by 5 points
function decreasetime(){
  timerCount=timerCount-5;
}

//this fuction shows the next question when the right answer is selected
function nextQuestion(index){
if (index<4){
  document.getElementsByClassName("questions")[index+1].style.display="block";
}
}

function show_initials(){
  if(Initials=document.querySelector("Initials").value){
    sessionStorage.Initials.value
  }
}

//This function displays all the hidden values
function Gameover(){
  document.getElementById("Gameover").style.display="block";
document.getElementById("Gameover").innerHTML ="GameOver";
document.getElementById("initials").style.display="block";
document.getElementById("Score").style.display="block";
}

//This is an event listener that calls the first function "start game"
startButton.addEventListener("click", startGame);

