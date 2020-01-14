'use strict';

/*
  CODE REVIEW: Avoid globals where you can.
  This should be a static array on the Takeout constructor
  i.e. Takeout.journalEntries = [] (after the constructor, of course)
*/

var takeout = [];

// Below is our constructor function.

function Takeout(userName, resName, walkTime, waitTime, totalTime, price, rating) {
  this.userName = userName;
  this.resName = resName;
  this.walkTime = parseInt(walkTime, 10);
  this.waitTime = parseInt(waitTime, 10);
  this.totalTime = this.walkTime + this.waitTime + this.walkTime;
  /*
    CODE REVIEW: It's generally frowned upon to calculate values in the constructor
    as you create a property. Better to have a Takeout.prototype.calculateTotalTime()
    method that you call after you create the instance, as well as later should any
    of those data points change
  */
  this.price = price;
  this.rating = rating;
  takeout.push(this);
}
// This is the function that will take in the data entered in the form and put in the constructor function.

function handleFormSubmitted(event) {
  /*
    CODE REVIEW
    Given the event.preventDefault() here, you tried to force a redirect
    in the HTML with that second button. Again, use a checkbox in the form
    and then redirect in this function if the user checked it. Much cleaner
  */
  event.preventDefault();
  console.log('event', event);

  /*
    CODE REVIEW
    These can all be shortened to one-liners for clarity
    var userNameValue = document.getElementById('user-name').value;
  */
  var userNameInput = document.getElementById('user-name');
  var userNameValue = userNameInput.value;

  var resNameInput = document.getElementById('res-name');
  var resNameValue = resNameInput.value;

  var walkTimeInput = document.getElementById('walk-time');
  var walkTimeValue = walkTimeInput.value;

  var waitTimeInput = document.getElementById('wait-time');
  var waitTimeValue = waitTimeInput.value;

  /*
    CODE REVIEW:
    What do you expect `this` referring to here?
  */
  var totalTimeValue = this.totalTime;

  var priceInput = document.getElementById('price');
  var priceValue = priceInput.value;

  var ratingInput = document.getElementById('rating');
  var ratingValue = ratingInput.value;

  /*
    CODE REVIEW:
    If you're not going to use the variable, you can just call the constructor function
    JavaScript will keep that instance in memory for you
  */
  var newTakeout = new Takeout(userNameValue, resNameValue, walkTimeValue, waitTimeValue, totalTimeValue, priceValue, ratingValue);

  // Below is sending data to local storage
  localStorage.setItem('savedTakeout', JSON.stringify(takeout));

  /*
    CODE REVIEW:
    What is this for loop intended to do?
  */
  for (var i = 0; i < takeout.length; i++);

  document.getElementById('new-takeout').reset();
}

// Below is the function to pull the Takeout data from local storage.

/*
  CODE REVIEW
  This is not actually a function as you note
  Even though this will run on page load by the nature of JS running "top down"
  It is still best practice to create a start() or initialize() function
  that does this work, and then call it as the first executable line of code
*/

var savedTakeoutString = localStorage.getItem('savedTakeout');
if (savedTakeoutString) {
  var arrayOfNotTakeout = JSON.parse(savedTakeoutString);
  for (var k = 0; k < arrayOfNotTakeout.length; k++) {
    new Takeout(arrayOfNotTakeout[k].userName, arrayOfNotTakeout[k].resName, arrayOfNotTakeout[k].walkTime, arrayOfNotTakeout[k].waitTime, arrayOfNotTakeout[k].totalTime, arrayOfNotTakeout[k].price, arrayOfNotTakeout[k].rating);
  }

} else {

  new Takeout('Mat', 'Subway', '5', '2', '12', '$', '★★★☆');
  new Takeout('Sally', 'Mantra', '4', '10', '20', '$$', '★★★☆');
  new Takeout('Keith', 'Japonesa', '20', '7', '47', '$$$', '★★★★');
  new Takeout('Bella', '7-11', '4', '2', '10', '$', '★☆☆☆');
  new Takeout('Drew', 'Buffalo Wild Wings', '16', '2', '34', '$$', '★★☆☆');
}

/*
  CODE REVIEW
  It's a clean practice to ut all global variable declarations at the top of
  the file and all executing code (event listeners) here at the bottom.

  Make sure you're consistent about it.
*/

var formElement = document.getElementById('new-takeout');
formElement.addEventListener('submit', handleFormSubmitted);
