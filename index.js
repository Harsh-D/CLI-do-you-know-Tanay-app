// Required npm dependencies : readline-sync
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Whats your name ? ");

console.log(`Welcome ${userName} !`);

//function : play
function play(question, answer) 
{
  let userAnswer = readlineSync.question(question + "\n");

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("\n Correct");
    score += 1;
  } else {
    console.log("Incorrect");
    console.log("The correct answer is : " + answer + "\n");
  }
  console.log("Current Score: " + score);
  console.log("_______________\n");
}

// questions object
var questions = [
    {
        question: "Where does Tanay live? \n",
        answer: "Bangalore"
    },
    {
        question: "Where does Tanay work? \n",
        answer: "Microsoft"
    },
    {
        question: "Where did Tanay complete his Bachelors from? \n",
        answer: "MIT"
    }
]

for(let i=0; i<questions.length; i++)
{
    play(questions[i].question, questions[i].answer);
}

console.log("\nFinal Score : " + score);