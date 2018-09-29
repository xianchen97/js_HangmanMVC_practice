//Assigns an onclick function to all the buttons on the page.
$(document).ready(function(){
    $("button").click(function(){
        if(this.innerHTML == "Reset"){
            renderResetLives();
            return;
        }
        validateValues(this.innerHTML, this);
    });
});

/** 
 * Validates values of the key clicked or win-condition.
 * Updates score and lives depending on condition.
*/
function validateValues(val, button){
    editScore(val);
    renderDetails();
    for(i = 0; i < curr_word.length; i++){
        if(val == curr_word[i]){
            renderCorrGuess(val);   
        }
        changeCSS(button);
    }
    checkWinOrLoseCondition();
}

//Checks whether the user has won the game, if so print the correct alert message and  view.
function checkWinOrLoseCondition() {
    if (curr_guess.join("") == curr_word.join("")) {
      alert("You win! \n Starting a new game.");
      resetView();
    } else if (lives == MAX_LIVES) {
      alert("You lose! \n Starting a new game.");
      lives = 0;
      score = 0;
      renderDetails();
      resetView();
    }
}

