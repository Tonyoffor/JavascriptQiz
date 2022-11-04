var startGame = document.querySelector("#startGame");
var reset = document.querySelector("#reset");
var timer = document.querySelector("#timer");
var counter = document.querySelector("#counter");
var questionArea = document.querySelector(".questionArea");
var answerArea = document.querySelector(".answerArea");
var Score = document.querySelector("#Score")
var resetButton = document.querySelector("#resetButton")
var startButton = document.querySelector("#startbutton")

var timer = 0;
var timerleft = 80;
var timerCount;
var Userchoice;
var interval;
var ans;

var QuizQuestions = [
  {
    numb: 1,
  question: "Where in the index.html should you put your script.js tag?",
  ans: "At the bottom of the code before the closing </body> tag ", 
  options: [
     "At the bottom of the code before the closing </body> tag ", 
    "It does not matter you can put it anywhere",
    "At the top of your code",
    "In your </header> tag"
],
    numb: 2,
  question: "Where in the index.html should you put your style.css tag?",
  ans: "At the top of your code before the </head> tag",
  options: [
    "It does not matter you can put it anywhere",
    "In your </header> tag",
    "At the top of your code before the </head> tag",
    "At the bottom of the code"  
  ]
  },
  {
    numb: 3,
  question: "What does the Media querie function do?",
  ans: "It helps adjust the page to different screen sizes",
  options: [
    "It helps adjust the page to different screen sizes",
    "It helps show what is hiden in on a page",
    "It doesn't do anything",
    "It is used call a for loop"
  ]
  },
  {
    numb: 4,
  question: "In style.css how do you target an ID element?",
  ans: "With the # symbol",
  options: [
    "With the # symbol",
    "With the @ symbol",
    "With the ! symbol",
    "With the & symbol"
  ]
  },
  {
    numb: 5,
  question: "In style.css how do you target an class element?",
  ans: "With the . symbol",
  options: [
    "With the & symbol",
    "With the ^ symbol",
    "With the $ symbol",
    "With the % symbol",
  ]
  },
  ]
  
  var ans = [
    "At the bottom of the code before the closing </body> tag ", 
    "At the top of your code before the </head> tag",
    "It helps adjust the page to different screen sizes",
    "With the # symbol",
    "With the . symbol",
  ];
  

  function startTimer(){
//the start button will start this prompt 
  };


function reset(){
 // Resets timer, game and go back to the 1t question.
 timer = 0;
 timerleft = 0;
 startGame = QuizQuestions;
 // Renders win and loss counts and sets them into client storage

}

function gameover(){

}

function nextQuestion(){
  for (let i = 0; i < QuizQuestions.length; i++) {
    text += QuizQuestions[i] + "";

    // if userchoice !== ans then send score to wrong answer if right then send to correct answer
  }
}


// Attaches event listener to button
resetButton.addEventListener("click", reset);
startButton.addEventListener("click", startGame);