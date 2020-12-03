const readlineSync = require('readline-sync');
const chalk        = require('chalk');

var questionList = [
    {
      statement: "A lion doesn’t concern himself with the opinion of Sheep.",
      correctAnswer: "Twyin Lannister",
      optionList: ["Twyin Lannister","Jamie Lannister","Orell","Robert Baratheon"]
    },
    {
      statement: "In Battle, Discipline beats numbers 9 times out of 10.",
      correctAnswer: "Jon Snow",
      optionList: ["Daenerys Targaryen","Jon Snow", "Arya Stark", "Olenna Tyrell"]
    },
    {
      statement: "Leave one wolf alive & the Sheep are never Safe.",
      correctAnswer: "Arya Stark",
      optionList: ["Tyrion Lannister","Olenna Tyrell", "Arya Stark", "Daenerys Targaryen"]
    },
    {
      statement: "The true history of the world is the history of great conversations.",
      correctAnswer: "Tyrion Lannister",
      optionList: ["Tyrion Lannister","Olenna Tyrell", "Bran Stark", "Daenerys Targaryen"]
    },
    {
      statement: "Everything before the word ‘but’ is horseshit.",
      correctAnswer: "John Snow",
      optionList: ["Bran Stark", "John Snow", "Sansa Stark", "Arya Stark"]
    },
    {
      statement: "The man who passes the sentence should swing the sword.",
      correctAnswer: "Ned Stark",
      optionList: ["Twyin Lannister", "John Snow", "Ned Stark", "Robert Baratheon"]
    },
    {
      statement: "Any man who must say ‘I am the king’ is no true king.",
      correctAnswer: "Twyin Lannister",
      optionList: ["Twyin Lannister", "John Snow", "Ned Stark", "Robert Baratheon"]
    },
    {
      statement: "Fear cuts deeper than swords.",
      correctAnswer: "Arya Stark",
      optionList: ["Twyin Lannister", "Peter Bailish", "Ned Stark", "Sansa Stark"]
    },
    {
      statement: "It is beautiful beneath the sea, but if you stay too long, you’ll drown.",
      correctAnswer: "Three Eyed Raven",
      optionList: ["Ser Davos", "Peter Bailish", "Cersi Lannister", "Three Eyed Raven"]
    },
    {
      statement: "The night is dark and full of terrors",
      correctAnswer: "Melisandre",
      optionList: ["Mance Rayder", "Melisandre", "Tormund", "Syrio Forel"]
    }
]

var userName = readlineSync.question('Enter Username: ');

console.log(`Welcome ${chalk.bold(`${userName}`)}. Let's play CAN YOU GUESS THE CHARACTER? `);

var approval = readlineSync.question(`Type ${chalk.bgCyan(`[Y]`)} to start the game, ${chalk.bgYellow(`[R]`)} for rules and ${chalk.bgRedBright('[E]')} to exit the game : `);

var score = 0;
var highScores = [
  {
    name: "Dexter",
    score: 10
  },
  {
    name: "Drake",
    score: 8
  },
  {
    name: "Steve",
    score: 7
  }
]

var questionNo = 0;

function game(question, correctAnswer, options){
  questionNo++;
  console.log(`${questionNo}. ${question}:`);

  for(let i=0; i<options.length; i++){
    console.log(`- ${options[i]}`);
  }

  var userAnswer = readlineSync.question(`ans: `);

  if(userAnswer.toUpperCase() == correctAnswer.toUpperCase()){
    score++;
    console.log(`${chalk.green(`Correct answer. Your current Score is ${chalk.green.bold(`${score}`)}`)}`);
  }else{
    console.log(`${chalk.red(`Oops! Worng answer. Your current Score is ${chalk.red.bold(`${score}`)}`)}`);
  }
  console.log(`------`);
}



if(approval.toUpperCase() == 'R'){
  console.log(`You will be asked 10 questions based on GOT. You'll given options and you have to choose the correct answer and tye it in answer section. Let's play now.`);

  // getApproval();
}else if(approval.toUpperCase() === 'Y'){

  for(let i=0; i<questionList.length; i++){
    game(questionList[i].statement, questionList[i].correctAnswer, questionList[i].optionList);
  }

  console.log(`GAME OVER!`);
  console.log(`Your total score: ${score}`);

  var userScore = score;

  for(let i=0; i<highScores.length; i++){
    if(userScore > highScores[i].score){
      console.log(`Hurray! Looks like you've beaten ${highScores[i].name}. Screenshot and send me your score so I can update list. Congratulations!`);
    }
  }
}else if(approval.toUpperCase() === 'E'){
  console.log('Bye :(');
}else{
  console.log(`Wrong Input!`);
}
