
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
  if (numberGoodFields === 4) {
    addActiveState();
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
// var randomNum = getRandomNum();

updateRangeButton.addEventListener('click', updateRange);
updateRangeButton.addEventListener('click', getRandomNum);

function updateRange() {
  event.preventDefault(event);
  currentRangeMin.innerText = minRangeInput.value;
  currentRangeMax.innerText = maxRangeInput.value;
};

//Get the random number

function getRandomNum() {
  var min = Math.ceil(parseInt(minRangeInput.value));
  var max = Math.floor(parseInt(maxRangeInput.value));
  return Math.floor(Math.random() * (max - min)) + min;
};

var randomNum = getRandomNum();
