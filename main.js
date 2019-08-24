// All four fields add active state

var submitButton = document.querySelector("#submit-button");
var guessFields = document.querySelectorAll(".challenger-input-fields")

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
  changeWinnerCardName(winnerCardChallenger1, challenger1NameBox);
  changeWinnerCardName(winnerCardChallenger2, challenger2NameBox);
  determineWinnerCard();
  activateResetButton();
}

var workingSubmitButton = document.querySelector(".submit-active");

submitButton.addEventListener("click", onSubmit);

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

var winnerCardChallenger1 = document.getElementById('card-challenger1-name');
var winnerCardChallenger2 = document.getElementById('card-challenger2-name');
var winnerCardWinner = document.getElementById('challenger-winner-name');
var winnerCard = document.getElementById('winner-card');

function changeWinnerCardName (winnerCardName, challengerInput) {
  winnerCardName.innerText = challengerInput.value;
};

function determineWinnerCard() {
  if (parseInt(challenger1GuessBox.value) === randomNum) {
    winnerCardWinner.innerText = challenger1NameBox.value;
    winnerCard.classList.remove('hidden')
  } else if (parseInt(challenger2GuessBox.value) === randomNum) {
    winnerCardWinner.innerText = challenger2NameBox.value;
    winnerCard.classList.remove('hidden')
  } else {
    winnerCardWinner.innerText = winnerCardWinner.innerText;
  }
}



// function changeWinnerName() {
//
// }

// X button on winner box

var winnerCloseButton = document.getElementById("winnerCloser");
//var winnerCard = document.getElementById('winner-card'); (this was called earlier)

winnerCloseButton.addEventListener("click", function() {
  winnerCard.classList.add("hidden");
});


//ACTIVATE RESET BUTTON

function addActiveResetState() {
  resetButton.classList.add("reset-active")
}

function activateResetButton() {
  if (winnerCardWinner.innerText !== "WINNER NAME") {
    addActiveResetState();
    resetButton.disabled = false;
  }
}


































//RESET BUTTON FUNCTIONALITY

var resetButton = document.getElementById("reset-button");

function resetButtonFunctionality() {
  console.log("reset is working")
  winnerCardChallenger1.innerText = "Challenger 1";
  winnerCardChallenger2.innerText = "Challenger 2";
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
  winnerCard.classList.add("hidden");
}

resetButton.addEventListener("click", resetButtonFunctionality);
resetButton.addEventListener("click", getRandomNum);
resetButton.addEventListener('click', checkNum);
