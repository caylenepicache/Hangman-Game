//wordbank
var wordBank = ["rose", "sunflower", "carnation", "peony", "daffodil", "marigold", "chrysanthemum", "lilac", "tulip", "dahlia", "lavender", "gladiolus", "pansy", "lily", "daisy", "hydrangea", "honeysuckle", "bellflower", "amaryllis", "aster", "begonia", "buttercup", "cosmos", "foxglove", "geranium", "hollyhock", "hyacinth", "iris", "lantana", "mirabilis", "moonflower", "orchid", "periwinkle", "petunia", "primrose", "ranunculus", "snapdragon", "tansy", "violet", "zinnia"];

//score of user
var wins = 0;
var loss = 0;

//how many guesses per round
var turnsLeft = 10;

//letters user input whether it's right or wrong
var wrongGuesses = [];

//empty array for the amount of underscores to correlate with wordBank items
var underScoreArray = [];
var stringArray = [];

var previousWord;
// STEPS/THOUGHT PROCESS ARE COMMENTED

//FUNCTIONS

//any key starts game
function startGame() {
  Game();
};

//sets up the underscores
function blankSpace() {

  for (i = 0; i < chosenWord.length; i++) {
    underScoreArray[i] = "_";
    stringArray = underScoreArray.join("  ");
  }
};


//key again will take a guess
function Game() {
  chosenWord="";

  //a word is chosen at random
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  //will reset when game is called up again
  wrongGuesses = [];
  underScoreArray = [];
  turnsLeft = 10;
  underScoreArray=[];
  stringArray=[];

  //calling blankspace function
  blankSpace();

  document.querySelector("#word-blanks").innerHTML = underScoreArray.join(" ");
  
//the internal part of the game
  document.onkeyup = function innerGame(event) {
    

    //splits the chosen word into an array called wordToArray
    wordToArray = chosenWord.split("");

    //input the event key pressed into keyInput
    var keyInput = event.key;

    //converts input to lowercase
    keyInput = keyInput.toLowerCase();




//checks if letter is part of the alphabet
if (event.keyCode >= 65 && event.keyCode <= 90){

    //checks if letter is already in the wrong guess array
  if (wrongGuesses.indexOf(keyInput) > -1) {
    }

      //checks if letter is in the array
      //else if will execute if the letter is in that array, what to do with it
    else if (wordToArray.indexOf(keyInput) > -1) {

      //for loop the letters to check each letter and compares it to Key input
      for (i = 0; i < chosenWord.length; i++) {
          //if the keyinput is the same as the word in array, replace that key input at the same index of the array
        if( keyInput === wordToArray[i]){
          underScoreArray[i] = keyInput;
          document.querySelector("#word-blanks").innerHTML = underScoreArray.join(" ");
        } 
      }
        }
        else {
          wrongGuesses.push(keyInput);
          document.querySelector("#wrong-guesses").innerHTML = wrongGuesses.join(", ");
          turnsLeft--;
          document.querySelector("#guesses-left").innerHTML = turnsLeft;
        }
      }

        //determines how many turns are left and keeps track of score
  if (underScoreArray.toString() === wordToArray.toString() && turnsLeft > 0) {
    wins++;
    document.querySelector("#win-counter").innerHTML = wins;
    previousWord = chosenWord;
    document.querySelector("#previous-word").innerHTML = previousWord;
    alert("Correct! Press any letter for next word!");
    Game ();
  }
  else if (turnsLeft === 0) {
    loss++;
    document.querySelector("#loss-counter").innerHTML = loss;
    previousWord = chosenWord;
    document.querySelector("#previous-word").innerHTML = previousWord;
    alert("No turns left! Press any letter for next word!");
    Game ();
    }

  }
};


document.onkeyup = startGame;
