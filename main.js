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






// var challenger1NameBox = document.querySelector("#challenger1-name-box");
//
// var challenger2NameBox = document.querySelector("#challenger2-name-box");
//
// var challenger1GuessBox = document.querySelector("#challenger1-guess-box");
//
// var challenger2GuessBox = document.querySelector("#challenger2-guess-box");


// submitButton.addEventListener(function, removeInactiveState, addActiveState);
//
// function removeInactiveState(){
//
//   submitButton.classList.remove(".section2-submit-button");
//
// }
//  function addActiveState() {
//
// submitButton.classList.add(".submit-active");
//
//  }
//
//  function addInactiveState(){
//
//    submitButton.classList.add(".section2-submit-button");
//
//  }
//   function removeActiveState() {
//
//  submitButton.classList.remove(".submit-active");
//
//   }
//
// submitButton.addEventListener(function, removeInactiveState, addActiveState);

// submitButton.style['background-color'] = 'red'

// function activateSubmitButton() {
//   if (challenger1NameBox === null) {
//     return "positive";
//   } else {
//     return "NOT positive";
//   }
// }
