/**
 * ===============================================================================
 * Variables
 * ===============================================================================
 */
const CHARCODE_A = 97;
const CHARCODE_Z = 123;
const MAX_LIVES = 7;
const BUTTON_OPACITY = 0.2;
const words = ["blellum", "random", "render", "exceptional", "tattoo", "electricity", "gnathonic", "knowledge", "report", "dog"];
const def = 
[
  "an idle, indiscreet talker",
  "proceeding, made, or occurring without definite aim, reason, or pattern:",
  "to cause to be or become; make:",
  "unusually excellent; superior:",
  "a form of body modification where a design is made by inserting ink",
  "is the set of physical phenomena associated with the presence and motion of electric charge.",
  "sycophantic; fawning.",
  "acquaintance with facts, truths, or principles, as from study or investigation; general erudition:",
  "a statement or announcement.",
  "a domesticated canid, Canis familiaris, bred in many varieties."

];

let curr_guess = [];
let curr_word = [];
let score = 0;
let lives = 0;

//Selects a random word when the DOM has been loaded.
$(document).ready(function() {
  chooseRandomWord();
});


//Chooses a random word and assigns it to curr_word.
function chooseRandomWord() {
  randomIndex = [Math.floor(Math.random() * words.length)];
  curr_word = words[randomIndex].split("");
  curr_guess = curr_word.slice();
  curr_guess.fill("_");
  renderDefinition(def[randomIndex]);
}

//Edit score value depending on guess.
function editScore(guess_val) {
  noVal = true;
  for (i = 0; i < curr_word.length; i++) {
    if (guess_val == curr_word[i]) {
      score++;
      noVal = false;
    }
  }
  if (noVal == true) {
    score--;
    lives++;
  }
}

//Increment the score.
function updateScore(){
  ++document.getElementById("score"); 
}

//Reset the amount of lives.
function reset() {
  lives = 0;
}
