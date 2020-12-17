var readSync = require ('readline-sync');

var questions =[{
  question : "\nWhere do I study? ",
  answer : "PCCOER"
},{
  question : "\nDo I like SUITS or love SUITS? ",
  answer : "love"
},{
  question : "\nWhat do I love more seashore or mountaintops? ",
  answer : "seashore"
}];

var score = 0;

var highestScore = {
  name : "Sreenidhi ", 
  score : "3"
  }

function ask(question, answer){
  var ans = readSync.question(question);
  if (ans === answer){
    score = score + 1;
    console.log("\n You got that RIGHT :)\n Current Score: "+score+"\n-------");
  } else {
    console.log("\n That's not the RIGHT answer :(\n Current Score: "+score+"\n-------");
  }
}

var user = readSync.question("\tWhat is your name? ");
console.log("\n\tWelcome "+ user +"! \n\tLets play HOW WELL DO YOU KNOW SREENIDHI.\n")

for (var i =0; i<questions.length; i = i+1){
    ask(questions[i].question, questions[i].answer);
}

console.log("\n\nFinal Score : "+ score );
console.log("\n\n----- Highest Score -----");
console.log(highestScore.name +": "+ highestScore.score);
