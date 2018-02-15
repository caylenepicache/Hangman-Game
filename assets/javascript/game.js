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

// STEPS/THOUGHT PROCESS ARE COMMENTED

//FUNCTIONS

//any key starts game
function startGame() {
  console.log("start");
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
  //a word is chosen at random
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(chosenWord);

  //will reset when game is called up again
  wrongGuesses = [];
  underScoreArray = [];
  turnsLeft = 10;

  //calling blankspace function
  blankSpace();
  
//the internal part of the game
  document.onkeyup = function innerGame(event) {

    //splits the chosen word into an array called wordToArray
    wordToArray = chosenWord.split("");

    //input the event key pressed into keyInput
    var keyInput = event.key;

    //converts input to lowercase
    keyInput = keyInput.toLowerCase();
    //console.log(keyInput);




//checks if letter is part of the alphabet
if (event.keyCode >= 65 && event.keyCode <= 90){

    //checks if letter is in the wrong guess array
  if (wrongGuesses.indexOf(keyInput) > -1) {
      console.log("already guessed");
    }

      //checks if letter is in the array
      //else if will execute if the letter is in that array, what to do with it
    else if (wordToArray.indexOf(keyInput) > -1) {
      //console.log("letter is in the array");
      console.log(keyInput);


      //for loop the letters to check each letter and compares it to Key input
      for (i = 0; i < chosenWord.length; i++) {
          //console.log(chosenWord[i]);
          //if the keyinput is the same as the word in array, replace that key input at the same index of the array
        if( keyInput === wordToArray[i]){
          //console.log("TRUE");
          underScoreArray[i] = keyInput;
          //console.log(underScoreArray);
          document.querySelector("#word-blanks").innerHTML = underScoreArray.join(" ");
        } 
      }
        }
        else {
          wrongGuesses.push(keyInput);
          document.querySelector("#wrong-guesses").innerHTML = wrongGuesses.join(", ");
          //console.log(wrongGuesses);
          turnsLeft--;
          document.querySelector("#guesses-left").innerHTML = turnsLeft;
          //console.log(turnsLeft);
        }
      }
        //console.log(underScoreArray);
        //console.log(wordToArray);


        //determines how many turns are left and keeps track of score
  if (underScoreArray.toString() === wordToArray.toString() && turnsLeft > 0) {
    console.log(underScoreArray);
    console.log(wordToArray);
    wins++;
    document.querySelector("#win-counter").innerHTML = wins;
    console.log(wins);
    alert("Correct! Press any letter for next word!")
    Game ();
  }
  else if (turnsLeft === 0) {
    loss++;
    document.querySelector("#loss-counter").innerHTML = loss;
    alert("No turns left! Press any letter for next word!");
    console.log("no turns left");
    console.log(loss);
    Game ();
    }
  }
};


document.onkeyup = startGame;
