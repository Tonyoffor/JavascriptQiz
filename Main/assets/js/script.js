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
var correctanswer = 0;
var wronganswer = 0;



var QuizQuestions = [

];
  
  var ans = [
    "At the bottom of the code before the closing </body> tag ", 
    "At the top of your code before the </head> tag",
    "It helps adjust the page to different screen sizes",
    "With the # symbol",
    "With the . symbol",
  ];
  
function gameStart(){
  //show 1st question and start timer
  timerCount = 80;
  console.log("inside start game");
  document.getElementById("Q1").style.display="block";
  startTimer();
  
}



 function startTimer(){
  timer = setInterval(function(){
    timerCount--;
    time_sec.innerHTML = timerCount;
    if (timerCount ==0){
      clearInterval(timer);
     }
  },1000);
  console.log("inside start timer");
  console.log("timerCount="+timerCount);
  }

function increasescore(index){
scorecounter= scorecounter+1;
Score.innerHTML="Score: "+scorecounter;
nextQuestion(index);
}

function decreasetime(){
  timerCount=timerCount-2;
}

function nextQuestion(index){
if (index<4){
  document.getElementsByClassName("questions")[index+1].style.display="block";
}
  
  
}
//function reset(){
 // Resets timer, game and go back to the 1t question.
 //timer = 0;
 //timerleft = 0;
// startGame = QuizQuestions;
//clearinterval()
//}

//function gameover(){
//show result and reset button
//}

//function nextQuestion(){
//  for (let i = 1; i < QuizQuestions.length; i++) {
  //  text += QuizQuestions[i] + "";

    // if userchoice !== ans then send score to wrong answer if right then send to correct answer
 // }
//}

//function score(){
//if (Userchoice == ans){
  //correctanswer++;
//} else {
//wronganswer++;
//}
//}
// Attaches event listener to button

startButton.addEventListener("click", startGame);

