
//GLOBAL VARIABLES

var bothRangeFields = document.querySelectorAll(".minMaxRangeFields");
var challenger1NameBox = document.querySelector("#challenger1-name-box");
var challenger2NameBox = document.querySelector("#challenger2-name-box");
var challenger1GuessBox = document.querySelector("#challenger1-guess-box");
var challenger2GuessBox = document.querySelector("#challenger2-guess-box");
var clearButton = document.getElementById('clear-game-button');
var currentRangeMin = document.getElementById('current-min');
var currentRangeMax = document.getElementById('current-max');
var guessFields = document.querySelectorAll(".challenger-input-fields");
var guessCount = 0;
var guess1Error = document.getElementById('guess1-error-message');
var guess2Error = document.getElementById('guess2-error-message');
var minRangeInput = document.getElementById('min-range');
var minRangeError = document.getElementById("min-range-error-message");
var maxRangeInput = document.getElementById('max-range');
var maxRangeError = document.getElementById("max-range-error-message");
var name1Error = document.getElementById('name1-error-message');
var name2Error = document.getElementById('name2-error-message');
var pinkNumberGuess1 = document.getElementById("score-challenger1-guess");
var pinkNumberGuess2 = document.getElementById("score-challenger2-guess");
var randomNum = getRandomNum();
var resetButton = document.getElementById("reset-button");
var scoreChallengerName1 = document.getElementById("score-challenger1-name");
var scoreChallengerName2 = document.getElementById("score-challenger2-name");
var scoreText1 = document.getElementById("too-high-too-low1");
var scoreText2 = document.getElementById("too-high-too-low2");
var submitButton = document.querySelector("#submit-button");
var updateRangeButton = document.getElementById('range-update-button');
var workingSubmitButton = document.querySelector(".submit-active");
var winnerCardParent = document.getElementById("winner-card-section");

//EVENT LISTENERS

challenger1NameBox.addEventListener("change", activateSubmitButton);
challenger1NameBox.addEventListener("change", activateClearButton);
challenger2NameBox.addEventListener("change", activateSubmitButton);
challenger2NameBox.addEventListener("change", activateClearButton);
challenger1GuessBox.addEventListener("change", activateSubmitButton);
challenger1GuessBox.addEventListener("change", activateClearButton);
challenger2GuessBox.addEventListener("change", activateSubmitButton);
challenger2GuessBox.addEventListener("change", activateClearButton);
clearButton.addEventListener('click', clearGuess);
clearButton.addEventListener("click", disableClearButton);
resetButton.addEventListener("click", clickResetButton);
maxRangeInput.addEventListener("blur", maxRules);
maxRangeInput.addEventListener("blur", updateButtonReady);
minRangeInput.addEventListener("blur", minRules);
minRangeInput.addEventListener("blur", updateButtonReady);
submitButton.addEventListener("click", disableSubmitButton);
updateRangeButton.addEventListener('click', updateRange);
updateRangeButton.addEventListener('click', getRandomNum);
updateRangeButton.addEventListener('click', checkNum);
winnerCardParent.addEventListener("click", deleteWinnerCard);

// ALL FOUR FIELDS ACTIVE STATE

function addActiveState() {
  submitButton.classList.add("submit-active");
}

function activateSubmitButton() {
  var numberGoodFields = 0;
  for (var i = 0; i < guessFields.length; i++) {
    if (guessFields[i].value !== "") {
      numberGoodFields++;
    }
  }
  if (numberGoodFields === 6) {
    addActiveState();
    submitButton.disabled = false;
  }
}

//CHANGE RANGE NUMBERS TO MATCH INPUTS

function updateRange() {
  event.preventDefault(event);
  currentRangeMin.innerText = minRangeInput.value;
  currentRangeMax.innerText = maxRangeInput.value;
};

//GET THE RANDOM NUMBER

function getRandomNum() {
  var min = Math.ceil(parseInt(minRangeInput.value));
  var max = Math.floor(parseInt(maxRangeInput.value));
  randomNum = Math.floor(Math.random() * (max - min)) + min;
};

//FOR DEMO PURPOSES - CAN CHECK # IN DEV TOOLS

function checkNum() {
  console.log(randomNum);
}

//WINNER CARDS TEXT UPDATE

function compareGuess(guess,feedback){
  if (parseInt(guess.value) > randomNum) {
    feedback.innerText = "that's too high";
  } else if (parseInt(guess.value) < randomNum) {
    feedback.innerText = "that's too low";
  } else {
    feedback.innerText = "BOOM!";
    feedback.classList.add('color-change');
  }
}
 //REMOVES COLOR CHANGE ON RESET TO BE ADDED WHEN ANOTHER WINNER

function removeColorChange() {
  scoreText1.classList.remove('color-change');
  scoreText2.classList.remove('color-change');
  pinkNumberGuess1.classList.remove('color-change');
  pinkNumberGuess2.classList.remove('color-change');
}

//EVENT HANDLER FOR SUBMIT button

function onSubmit() {
  compareGuess(challenger1GuessBox, scoreText1);
  compareGuess(challenger2GuessBox, scoreText2);
  changePinkNumberGuess(pinkNumberGuess1, challenger1GuessBox);
  changePinkNumberGuess(pinkNumberGuess2, challenger2GuessBox);
  changeChallengerName(scoreChallengerName1, challenger1NameBox);
  changeChallengerName(scoreChallengerName2, challenger2NameBox);
  determineWinnerCard();
  determineWinnerName();
  activateResetButton();
  addRemoveErrors();
  increaseRange();
  countChallengerGuess();
}

//RESET BUTTON HANDLER
function clickResetButton() {
  resetGuessCount();
  resetButtonFunctionality();
  getRandomNum();
  checkNum();
  removeColorChange();
}

//AUTOFILL SCORE CARDS

  function changePinkNumberGuess (pinkNumber, numberInput) {
    pinkNumber.innerText = numberInput.value;
    if (parseInt(numberInput.value) === randomNum) {
      pinkNumber.classList.add('color-change');
    }
  };

  function changeChallengerName (challengerName, challengerInput) {
    challengerName.innerText = challengerInput.value;
  };

//WINNER CARD DISPLAY

function determineWinnerCard() {
  if (parseInt(challenger1GuessBox.value) === randomNum ||    parseInt(challenger2GuessBox.value) === randomNum) {
    addWinnerCard();
    }
  }

function determineWinnerName() {
  if (parseInt(challenger1GuessBox.value) === randomNum) {
      return challenger1NameBox.value;
  } else if (parseInt(challenger2GuessBox.value) === randomNum) {
      return challenger2NameBox.value;
  }
}

//ACTIVATE RESET BUTTON

function addActiveResetState() {
  resetButton.classList.add("reset-active")
}

function activateResetButton() {
  if (scoreText1.innerText === "BOOM!" || scoreText2.innerText === "BOOM!") {
    addActiveResetState();
    resetButton.disabled = false;
  }
}

//RESET BUTTON FUNCTIONALITY

function resetButtonFunctionality() {
  pinkNumberGuess1.innerText = "?";
  pinkNumberGuess2.innerText = "?";
  scoreChallengerName1.innerText = "Challenger 1"
  scoreChallengerName2.innerText = "Challenger 2"
  scoreText1.innerText = "Are you close?";
  scoreText2.innerText = "Are you close?";
  challenger1GuessBox.value = "";
  challenger2GuessBox.value = "";
  challenger1NameBox.value = "";
  challenger2NameBox.value = "";
}

//ACTIVATE CLEAR GUESS BUTTON

function makeClearActive() {
  clearButton.classList.add("clear-active");
}

function activateClearButton() {
  var numberGoodFields = 0;
  for (var i = 0; i < guessFields.length; i++) {
    if (guessFields[i].value !== "") {
      numberGoodFields++;
    }
  }
  if (numberGoodFields === 6) {
    makeClearActive();
    clearButton.disabled = false;
  }
}

 // CLEAR GUESS BUTTON FUNCTIONALITY

function clearGuess() {
  challenger1GuessBox.value = "";
  challenger2GuessBox.value = "";
}

//DISABLE CLEAR GUESS BUTTON

function disableClearButton() {
  if (challenger1GuessBox.value === "" && challenger2GuessBox.value === "") {
    clearButton.disabled = true;
    clearButton.classList.remove("clear-active");
  } else {
    clearButton.disabled = false;
  }
}

//MIN AND MAX UPDATE BUTTON RULES

function isMinGood() {
  var minGoodList =
    parseInt(maxRangeInput.value) > parseInt(minRangeInput.value) &&
    minRangeInput.value !== "e" &&
    minRangeInput.value !== "-" &&
    minRangeInput.value !== "+" &&
    minRangeInput.value !== ".";
    return minGoodList;
}

function minRules() {
  if (isMinGood()) {
    minRangeInput.classList.remove("challengeform-error");
    minRangeError.classList.add("hidden");
    updateRangeButton.classList.add("updatebutton-active")
    updateRangeButton.disabled = false;
  } else if (maxRangeInput.value === "" || minRangeInput.value === ""){
    minRangeInput.classList.remove("challengeform-error");
    minRangeError.classList.add("hidden");
    updateRangeButton.classList.remove("updatebutton-active")
    updateRangeButton.disabled = true;
  } else {
    minRangeInput.classList.add("challengeform-error");
    minRangeError.classList.remove("hidden");
    updateRangeButton.classList.remove("updatebutton-active")
    updateRangeButton.disabled = true;
  }
}

function isMaxGood() {
  var maxGoodList =
  parseInt(minRangeInput.value) < parseInt(maxRangeInput.value) && maxRangeInput.value !== "e" &&
  maxRangeInput.value !== "-" &&
  maxRangeInput.value !== "+" &&
  maxRangeInput.value !== ".";
  return maxGoodList;
}

function maxRules() {
  if (isMaxGood()) {
    maxRangeInput.classList.remove("challengeform-error");
    maxRangeError.classList.add("hidden");
    updateRangeButton.classList.add("updatebutton-active")
    updateRangeButton.disabled = false;
  } else if (maxRangeInput.value === "" || minRangeInput.value === ""){
    maxRangeInput.classList.remove("challengeform-error");
    maxRangeError.classList.add("hidden");
    updateRangeButton.classList.remove("updatebutton-active")
    updateRangeButton.disabled = true;
  } else {
    maxRangeInput.classList.add("challengeform-error");
    maxRangeError.classList.remove("hidden");
    updateRangeButton.classList.remove("updatebutton-active")
    updateRangeButton.disabled = true;
  }
}

// TRIGGER FOR UPDATE BUTTON ACTIVE

function activeUpdate() {
  updateRangeButton.classList.add("updatebutton-active");
  updateRangeButton.disabled = false;
}

function deActiveUpdate() {
  updateRangeButton.classList.remove("updatebutton-active");
  updateRangeButton.disabled = true;
}

function updateButtonReady() {
    if (isMinGood() && isMaxGood()) {
      activeUpdate();
    } else {
      deActiveUpdate();
    }
  }

// DISABLE SUBMIT BUTTON

function checkInputRange() {
  var guessErrors = parseInt(challenger1GuessBox.value) <     parseInt(minRangeInput.value) ||
    parseInt(challenger1GuessBox.value) > parseInt(maxRangeInput.value) ||
    parseInt(challenger2GuessBox.value) < parseInt(minRangeInput.value) ||
    parseInt(challenger2GuessBox.value) > parseInt(maxRangeInput.value);
  return guessErrors;
}

function checkInputContent() {
  var contentErrors = challenger1NameBox.value === "" || challenger2NameBox.value === "" ||
    challenger1GuessBox.value === "" || challenger2GuessBox.value === ""
    || challenger1GuessBox.value === challenger2GuessBox.value;
  return contentErrors;
}

function checkGuessParameters(guess) {
  var guessParameter = parseInt(guess.value) < parseInt(minRangeInput.value) ||
      parseInt(guess.value) > parseInt(maxRangeInput.value) ||
      guess.value === "" || guess.value === "" || guess.value === "e"
      || guess.value === "-" || guess.value === "+" || guess.value === "."
      || challenger1GuessBox.value === challenger2GuessBox.value;
  return guessParameter;
}

function disableSubmitButton() {
  if (checkInputRange() || checkInputContent()) {
        submitButton.classList.remove("submit-active");
        submitButton.disabled = true;
        addRemoveErrors();
      } else {
        submitButton.disabled = false;
        onSubmit(event);
      }
}

function addRemoveErrors() {
  addGuessErrorBorder(challenger1GuessBox, guess1Error);
  addGuessErrorBorder(challenger2GuessBox, guess2Error);
  addNameErrorBorder(challenger1NameBox, name1Error);
  addNameErrorBorder(challenger2NameBox, name2Error);
}

function addGuessErrorBorder(guess, error) {
  if (checkGuessParameters(guess)) {
        guess.classList.add('challengeform-error');
        error.classList.remove('hidden');
      } else {
        guess.classList.remove('challengeform-error');
        error.classList.add('hidden');
      }
}

function addNameErrorBorder(challenger, error) {
  if (challenger.value === "") {
        challenger.classList.add('challengeform-error');
        error.classList.remove('hidden');
      } else {
        challenger.classList.remove('challengeform-error');
        error.classList.add('hidden');
      }
}

//GUESS COUNT FUNCTION ON WINNER CARDS

function countChallengerGuess() {
  guessCount += 2;
  return guessCount;
}

function resetGuessCount() {
  if (parseInt(challenger1GuessBox.value) === randomNum || parseInt(challenger2GuessBox.value) === randomNum) {
    guessCount = 0;
  }
}

//RANGE INCREASE AFTER WIN

function increaseRange() {
  if ((parseInt(challenger1GuessBox.value) === randomNum || parseInt(challenger2GuessBox.value) === randomNum)
      && parseInt(minRangeInput.value) > 10) {
      var newMin = parseInt(minRangeInput.value) - 10;
      minRangeInput.value = newMin;
      currentRangeMin.innerText = newMin;
      var newMax = parseInt(maxRangeInput.value) + 10;
      maxRangeInput.value = newMax;
      currentRangeMax.innerText = newMax;
    } else if (parseInt(challenger1GuessBox.value) === randomNum || parseInt(challenger2GuessBox.value) === randomNum) {
      var newMax = parseInt(maxRangeInput.value) + 10;
      maxRangeInput.value = newMax;
      currentRangeMax.innerText = newMax;
    }
  }

//CREATE NEW WINNER CARD

function addWinnerCard() {
var newWinnerCardParent = document.getElementById('winner-card-section');
newWinnerCardParent.insertAdjacentHTML('afterbegin', `<article class="section2-card-background fade-in">
  <section class='section2-card-header'>
    <h4 id='card-challenger1-name' class='card-header-h4'>${challenger1NameBox.value}</h4>
    <p class='card-header-p'>VS</p>
    <h4 id='card-challenger2-name' class='card-header-h4'>${challenger2NameBox.value}</h4>
  </section>
  <div class='card-div-style'></div>
    <h1 class='section2-body-h1'><span class="challenger-winner-capitalize" id='challenger-winner-name'>${determineWinnerName()}</span><span class='section2-font-light color-change'> WINNER</span></h1>
  <div class='card-div-style'></div>
  <section class='section2-card-footer'>
    <p class='card-footer-p'><span class='section2-font-strong'>${countChallengerGuess()}</span>  GUESSES</p>
    <p class='card-footer-p'><span class='section2-font-strong'>-- </span>MINUTES</p>
    <button class='card-footer-button' id='winnerCloser'>X</button>
  </section>
</article>`);
}

//WINNER CARD CLOSE FUNCTIONALITY

function deleteWinnerCard(event) {
  if (event.target.classList.contains("card-footer-button")) {
    event.target.parentNode.parentNode.remove();
  }
}
