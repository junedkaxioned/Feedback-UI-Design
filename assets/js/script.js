var ratings = document.querySelectorAll('.rating');
var sendBtn = document.querySelector('.send-btn');
var feedbackContainer = document.querySelector('.feedback-container');
var selectedRating = 'Satisfied';

// Function for add and removinf class
ratings.forEach(function (rating) {
  rating.addEventListener('click', function () {
    for (var i = 0; i < ratings.length; i++) {
      ratings[i].classList.remove('active');
    }
    this.classList.add('active');
    
    // Condition for geting Feed Back text
    if (this) {
      selectedRating = this.lastElementChild.innerHTML;
    }
  })
})

// Event on submiting feedback
sendBtn.addEventListener('click', function () {
  feedbackContainer.innerHTML = `
    <span class="heart">Thank You!</span>
  <h2 class="feedback">Feedback: ${selectedRating}</h2>
  <p class="text">We'll use your feedback to improve our customer support</p>`
})
