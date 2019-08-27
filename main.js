
// All four fields add active state

var submitButton = document.querySelector("#submit-button");
var guessFields = document.querySelectorAll(".challenger-input-fields");

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

var challenger1NameBox = document.querySelector("#challenger1-name-box");
var challenger2NameBox = document.querySelector("#challenger2-name-box");
var challenger1GuessBox = document.querySelector("#challenger1-guess-box");
var challenger2GuessBox = document.querySelector("#challenger2-guess-box");

challenger1NameBox.addEventListener("change", activateSubmitButton);
challenger2NameBox.addEventListener("change", activateSubmitButton);
challenger1GuessBox.addEventListener("change", activateSubmitButton);
challenger2GuessBox.addEventListener("change", activateSubmitButton);

// Clear button removes active state

// function removeActiveState() {
//
//  submitButton.classList.remove(".submit-active");
//
//   }
// clearbutton.addEventListener("click",removeActiveState);

//Change range numbers to match inputs
var minRangeInput = document.getElementById('min-range');
var maxRangeInput = document.getElementById('max-range');
var updateRangeButton = document.getElementById('range-update-button');
var currentRangeMin = document.getElementById('current-min');
var currentRangeMax = document.getElementById('current-max');
var randomNum = getRandomNum();

updateRangeButton.addEventListener('click', updateRange);
updateRangeButton.addEventListener('click', getRandomNum);
updateRangeButton.addEventListener('click', checkNum);

function updateRange() {
  event.preventDefault(event);
  currentRangeMin.innerText = minRangeInput.value;
  currentRangeMax.innerText = maxRangeInput.value;
  // minMaxRules();
};


//Get the random number

function getRandomNum() {
  var min = Math.ceil(parseInt(minRangeInput.value));
  var max = Math.floor(parseInt(maxRangeInput.value));
  randomNum = Math.floor(Math.random() * (max - min)) + min;
};

function checkNum() {
  console.log(randomNum);
}

//Winner cards text update

var scoreText1 = document.getElementById("too-high-too-low1");
var scoreText2 = document.getElementById("too-high-too-low2");
// These were declared in earlier function:
// var challenger1GuessBox
// var challenger2GuessBox

function compareGuess(guess,feedback){
  console.log("if working say hi");
  if (parseInt(guess.value) > randomNum) {
    feedback.innerText = "that's too high";
  } else if (parseInt(guess.value) < randomNum) {
    feedback.innerText = "that's too low";
  } else {
    feedback.innerText = "BOOM!";
  }
}

function onSubmit(event) {
  event.preventDefault();
  compareGuess(challenger1GuessBox, scoreText1);
  compareGuess(challenger2GuessBox, scoreText2);
  changePinkNumberGuess(pinkNumberGuess1, challenger1GuessBox);
  changePinkNumberGuess(pinkNumberGuess2, challenger2GuessBox);
  changeChallengerName(scoreChallengerName1, challenger1NameBox);
  changeChallengerName(scoreChallengerName2, challenger2NameBox);
  determineWinnerCard();
  determineWinnerName()
  activateResetButton();
  addRemoveErrors();
  countChallengerGuess();
  increaseRange();
}

var workingSubmitButton = document.querySelector(".submit-active");

submitButton.addEventListener("click", disableSubmitButton);

//Change pink numbers to match guess, change names to match challenger names

var pinkNumberGuess1 = document.getElementById("score-challenger1-guess");
var pinkNumberGuess2 = document.getElementById("score-challenger2-guess");
var scoreChallengerName1 = document.getElementById("score-challenger1-name");
var scoreChallengerName2 = document.getElementById("score-challenger2-name");

  function changePinkNumberGuess (pinkNumber, numberInput) {
    pinkNumber.innerText = numberInput.value;
  };

  function changeChallengerName (challengerName, challengerInput) {
    challengerName.innerText = challengerInput.value;
  };

//Winner card display!!!

function determineWinnerCard() {
  if (parseInt(challenger1GuessBox.value) === randomNum || parseInt(challenger2GuessBox.value) === randomNum) {
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



// function changeWinnerName() {
//
// }

// X button on winner box

// var winnerCloseButton = document.getElementById("winnerCloser");
//var winnerCard = document.getElementById('winner-card'); (this was called earlier)

// winnerCloseButton.addEventListener("click", function() {
//   winnerCard.classList.add("hidden");
// });

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

var resetButton = document.getElementById("reset-button");

function resetButtonFunctionality() {
  console.log("reset is working")
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

resetButton.addEventListener("click", resetGuessCount);
resetButton.addEventListener("click", resetButtonFunctionality);
resetButton.addEventListener("click", getRandomNum);
resetButton.addEventListener('click', checkNum);

//clear game button functionality
// make active once all inputs are filled out
var clearButton = document.getElementById('clear-game-button');

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

challenger1NameBox.addEventListener("change", activateClearButton);
challenger2NameBox.addEventListener("change", activateClearButton);
challenger1GuessBox.addEventListener("change", activateClearButton);
challenger2GuessBox.addEventListener("change", activateClearButton);

 // when clear button clicked the guess fields are cleared
clearButton.addEventListener('click', clearGuess);

function clearGuess() {
  challenger1GuessBox.value = "";
  challenger2GuessBox.value = "";
}

//clear button disables when nothing to be cleared

clearButton.addEventListener("click", disableClearButton);

function disableClearButton() {
  if (challenger1GuessBox.value === "" && challenger2GuessBox.value === "") {
    clearButton.disabled = true;
    clearButton.classList.remove("clear-active");
  } else {
    clearButton.disabled = false;
  }
}

//MIN AND MAX rules

//need to make it so that ranges don't update when number is wrong
//refactor using ||

var minRangeError = document.getElementById("min-range-error-message");
var maxRangeError = document.getElementById("max-range-error-message");

function isMinGood() {
  var minGoodList =
    // minRangeInput.value !== "" &&
    // maxRangeInput.value !== "" &&
    parseInt(maxRangeInput.value) > parseInt(minRangeInput.value) &&
    minRangeInput.value !== "e" &&
    minRangeInput.value !== "-" &&
    minRangeInput.value !== "+" &&
    minRangeInput.value !== ".";
    console.log(minGoodList, minRangeInput.value);

    return minGoodList;
}

function minRules() {
  if (isMinGood()) {
    minRangeInput.classList.remove("challengeform-error");
    minRangeError.classList.add("hidden");
    updateRangeButton.classList.add("updatebutton-active")
    updateRangeButton.disabled = false;
  } else if (maxRangeInput.value === "" || minRangeInput.value === ""){
    maxRangeInput.classList.remove("challengeform-error");
    maxRangeError.classList.add("hidden");
    updateRangeButton.classList.remove("updatebutton-active")
    updateRangeButton.disabled = true;
    console.log("yes I'm here")
  } else {
    minRangeInput.classList.add("challengeform-error");
    minRangeError.classList.remove("hidden");
    updateRangeButton.classList.remove("updatebutton-active")
    updateRangeButton.disabled = true;
    console.log("just called to say hello");
  }
}

function isMaxGood() {
  var maxGoodList =
  // maxRangeInput.value !== "" &&
  // minRangeInput.value !== "" &&
  parseInt(minRangeInput.value) < parseInt(maxRangeInput.value) && maxRangeInput.value !== "e" &&
  maxRangeInput.value !== "-" &&
  maxRangeInput.value !== "+" &&
  maxRangeInput.value !== ".";
  console.log(maxGoodList);
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
    console.log("yes I'm here too");
  } else {
    maxRangeInput.classList.add("challengeform-error");
    maxRangeError.classList.remove("hidden");
    updateRangeButton.classList.remove("updatebutton-active")
    updateRangeButton.disabled = true;
    console.log("hello again hello");
  }
}

minRangeInput.addEventListener("blur", minRules);
maxRangeInput.addEventListener("blur", maxRules);


// TRIGGER FOR UPDATE BUTTON ACTIVE

var bothRangeFields = document.querySelectorAll(".minMaxRangeFields");

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


  minRangeInput.addEventListener("blur", updateButtonReady);
  maxRangeInput.addEventListener("blur", updateButtonReady);


// submit button won't work unless fields are entered

var name1Error = document.getElementById('name1-error-message');
var name2Error = document.getElementById('name2-error-message');
var guess1Error = document.getElementById('guess1-error-message');
var guess2Error = document.getElementById('guess2-error-message');

function checkInputRange() {
  var guessErrors = parseInt(challenger1GuessBox.value) < parseInt(minRangeInput.value) ||
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
//Guess Count function and getting on winner cards
var guessCount = 0;

function countChallengerGuess() {
  guessCount += 2;
  console.log(guessCount);
  return guessCount;
}

function resetGuessCount() {
  if (parseInt(challenger1GuessBox.value) === randomNum || parseInt(challenger2GuessBox.value) === randomNum) {
    guessCount = 0;
  }
}

//succesful win range increases and decreases to get larger

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

//Creating new winner card in JS


function addWinnerCard() {
var newWinnerCardParent = document.getElementById('winner-card-section');
newWinnerCardParent.innerHTML += `
<article class="section2-card-background">
  <section class='section2-card-header'>
    <h4 id='card-challenger1-name' class='card-header-h4'>${challenger1NameBox.value}</h4>
    <p class='card-header-p'>VS</p>
    <h4 id='card-challenger2-name' class='card-header-h4'>${challenger2NameBox.value}</h4>
  </section>
  <div class='card-div-style'></div>
    <h1 class='section2-body-h1'><span class="challenger-winner-capitalize" id='challenger-winner-name'>${determineWinnerName()}</span><span class='section2-font-light'> WINNER</span></h1>
  <div class='card-div-style'></div>
  <section class='section2-card-footer'>
    <p class='card-footer-p'><span class='section2-font-strong'>${countChallengerGuess()}</span>  GUESSES</p>
    <p class='card-footer-p'><span class='section2-font-strong'>1.35 </span>MINUTES</p>
    <button class='card-footer-button' id='winnerCloser'>X</button>
  </section>
</article>`;
}

//WINNER CARD X box

var winnerCardParent = document.getElementById("winner-card-section");

winnerCardParent.addEventListener("click", deleteWinnerCard);

function deleteWinnerCard(event) {
  if (event.target.classList.contains("card-footer-button")) {
    event.target.parentNode.parentNode.remove();
  }
}


// X button on winner box

// var winnerCloseButton = document.getElementById("winnerCloser");
//var winnerCard = document.getElementById('winner-card'); (this was called earlier)

// winnerCloseButton.addEventListener("click", function() {
//   winnerCard.classList.add("hidden");
// });
