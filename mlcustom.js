console.log("mlcustom.js loaded");

// Set form progress indicator numbers
var formProgressIndicators = document.querySelectorAll('.form-progress-indicator');

formProgressIndicators.forEach(function(formProgressIndicator) {
  var number = parseInt(formProgressIndicator.className.match(/\d+/)[0]);
  formProgressIndicator.textContent = number;
});