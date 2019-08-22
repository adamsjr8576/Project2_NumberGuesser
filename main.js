var minRangeInput = document.getElementById('min-range');
var maxRangeInput = document.getElementById('max-range');
var updateRangeButton = document.getElementById('range-update-button');
var currentRangeMin = document.getElementById('current-min');
var currentRangeMax = document.getElementById('current-max');
var randomNum = getRandomNum();

updateRangeButton.addEventListener('click', updateRange);
updateRangeButton.addEventListener('click', getRandomNum);

function updateRange() {
  event.preventDefault(event);
  currentRangeMin.innerText = minRangeInput.value;
  currentRangeMax.innerText = maxRangeInput.value;
};

function getRandomNum() {
  var min = Math.ceil(parseInt(minRangeInput.value));
  var max = Math.floor(parseInt(maxRangeInput.value));
  return Math.floor(Math.random() * (max - min)) + min;
};
