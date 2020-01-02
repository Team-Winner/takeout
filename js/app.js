'use strict';

console.log('js linked!');

var takeout = [];

// Below is my constructor function.

function Takeout(userName, resName, walkTime, waitTime, totalTime, price, rating) {
  this.userName = userName;
  this.resName = resName;
  this.walkTime = parseInt(walkTime, 10);
  this.waitTime = parseInt(waitTime, 10);
  this.totalTime = this.walkTime + this.waitTime + this.walkTime;
  this.price = price;
  this.rating = rating;
  takeout.push(this);
}

// This is the function that will take in the data entered in the form and put in the constructor function.

function handleFormSubmitted(event) {
  event.preventDefault();
  console.log('event', event);
  var userNameInput = document.getElementById('user-name');
  var userNameValue = userNameInput.value;

  var resNameInput = document.getElementById('res-name');
  var resNameValue = resNameInput.value;

  var walkTimeInput = document.getElementById('walk-time');
  var walkTimeValue = walkTimeInput.value;

  var waitTimeInput = document.getElementById('wait-time');
  var waitTimeValue = waitTimeInput.value;

  var totalTimeValue = this.totalTime;

  var priceInput = document.getElementById('price');
  var priceValue = priceInput.value;

  var ratingInput = document.getElementById('rating');
  var ratingValue = ratingInput.value;

  var newTakeout = new Takeout(userNameValue, resNameValue, walkTimeValue, waitTimeValue, totalTimeValue, priceValue, ratingValue);

  // below is sending data to local storage

  localStorage.setItem('savedTakeout', JSON.stringify(takeout));
  for (var i = 0; i < takeout.length; i++);


  document.getElementById('new-takeout').reset();
}

// Below is the function to pull the Takeout data from local storage.

var savedTakeoutString = localStorage.getItem('savedTakeout');
if (savedTakeoutString) {
  var arrayOfNotTakeout = JSON.parse(savedTakeoutString);
  for (var k = 0; k < arrayOfNotTakeout.length; k++) {
    new Takeout(arrayOfNotTakeout[k].userName,arrayOfNotTakeout[k].resName, arrayOfNotTakeout[k].walkTime, arrayOfNotTakeout[k].waitTime, arrayOfNotTakeout[k].totalTime, arrayOfNotTakeout[k].price, arrayOfNotTakeout[k].rating);
  }

} else {

  new Takeout('Mat','Subway', '5', '2', '12', '$', '★★★☆');
  new Takeout('Sally','Mantra', '4', '10', '20', '$$', '★★★☆');
  new Takeout('Keith','Japonesa', '20', '7', '47', '$$$', '★★★★');
  new Takeout('Bella','7-11', '4', '2', '10', '$', '★☆☆☆');
  new Takeout('Drew','Buffalo Wild Wings', '16', '2', '34', '$$', '★★☆☆');
}
console.log('takeout', takeout);

var formElement = document.getElementById('new-takeout');
formElement.addEventListener('submit', handleFormSubmitted);

// This is the function that will render the data table.


console.log('takeout', takeout);
