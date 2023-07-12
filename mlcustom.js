console.log("mlcustom.js loaded");

// Add arrows to Previous and Next buttons
var nextButton = document.querySelector('.next.btn.btn-default');
var previousButton = document.querySelector('.prev.btn.btn-default');
var terms = document.querySelector('.terms');

addEventListener("load", function() {
    // Set form progress indicator numbers
    var formProgressIndicators = document.querySelectorAll('.form-progress-indicator');

    formProgressIndicators.forEach(function(formProgressIndicator) {
    var number = parseInt(formProgressIndicator.className.match(/\d+/)[0]);
    formProgressIndicator.textContent = number;
    });

    // Create span elements and assign arrow signs
    var leftArrowSpan = document.createElement('span');
    var rightArrowSpan = document.createElement('span');

    leftArrowSpan.innerHTML = '&lt; ';
    rightArrowSpan.innerHTML = ' &gt;';

    // Append the span element to the button
    nextButton.appendChild(rightArrowSpan);

    // Insert the arrowSpan before the button's existing content
    previousButton.insertBefore(leftArrowSpan, previousButton.firstChild);

    // Hide Terms and Conditions
    terms.style.display = 'none';
});

nextButton.addEventListener("click", function() {
    setTimeout(function() {
        if (nextButton.style.display === 'none') {
            terms.style.display = 'flex';
        }
    }, 100); 
});

previousButton.addEventListener("click", function() { 
    terms.style.display = 'none';
});