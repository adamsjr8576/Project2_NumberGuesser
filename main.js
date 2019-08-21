var minRangeInput = document.getElementById('min-range');
var maxRangeInput = document.getElementById('max-range');
var updateRangeButton = document.getElementById('range-update-button');
var currentRangeMin = document.getElementById('current-min');
var currentRangeMax = document.getElementById('current-max');

function updateRange() {
  currentRangeMin.innerhtml = minRangeInput.value;
  currentRangeMax.innerhtml = maxRangeInput.value;
}

updateRangeButton.addEventListener('click', updateRange);
