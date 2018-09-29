//Function call to render out elements when the DOM has been loaded.
$(document).ready(function() {
  renderAlphaButtons();
  renderUnderscores();
});

/**
 * =========================================================================
 * The following functions apply changes to the DOM elements in Hangman.html
 * =========================================================================
 */

 //Renders out buttons with values from charcodes A-Z
function renderAlphaButtons() {
  holder = document.getElementById("buttons");
  for (i = CHARCODE_A; i < CHARCODE_Z; i++) {
    button = document.createElement("button");
    asciiToChar = String.fromCharCode(i);
    button.innerHTML = asciiToChar;
    button.className = "btn btn-info";
    document.getElementById("buttons").appendChild(button);
  }
}

//Renders out underscores based on the word that has to be guessed.
function renderUnderscores() {
  underscoreHolder = document.getElementById("underscores");
  text = "_" + " ";
  text = text.repeat(curr_word.length - 1);
  textNode = document.createTextNode(text);
  p_elem = document.createElement("p");
  p_elem.appendChild(textNode);
  underscoreHolder.appendChild(p_elem);
}

//Renders out the definition of the selected word onto the HTML
function renderDefinition(def) {
  document.getElementById("def").innerHTML = "Definition: " + def;
}

//Replaces characters in the guessed word array when a correct key has been clicked.
function renderCorrGuess(val) {
  guess = "";
  underscoreHolder = document.getElementById("underscores");
  for (i = 0; i < curr_word.length; i++) {
    if (val == curr_word[i]) {
      curr_guess[i] = val;
    }
  }
  guess = curr_guess.join(" ");
  underscoreHolder.childNodes[0].innerHTML = guess;
}

//Render out the score and lives values onto the HTML
function renderDetails() {
  p_tag = document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("lives").innerHTML = "Lives: " + lives;
}

//Resets the css that was changed.
function resetButtonCSS() {
  $("button").css({
    opacity: "1"
  });
  $("button").attr("disabled", false);
}

//Changes the opacity and disables the button.
function changeCSS(button){
  button.disabled = true; 
  button.style.opacity = "" + BUTTON_OPACITY;
}

//Function resets the view to the initial state
function resetView() {
  document
    .getElementById("underscores")
    .removeChild(document.getElementById("underscores").firstChild);
  chooseRandomWord();
  renderUnderscores();
  resetButtonCSS();
}

//Reset the amount of lives on the HTML.
function renderResetLives() {
  reset();
  document.getElementById("lives").innerHTML = "Lives: " + lives;
}
