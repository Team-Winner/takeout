'use strict';

console.log('js linked!');

var takeout = [];

// 27DEC 1613. Function is now taking in the data from the form. Next steps are to put the data into local storage and then pull the info out of local storage to render on the results page. The render function has been writen but is commented out.

// Below is my constructor function.

function Takeout( nameOfThisRestaraunt, walkTime, waitTime, price, rating, ) {
  this.name = nameOfThisRestaraunt;
  this.walkTime = walkTime;
  this.waitTime = waitTime;
  this.price = price;
  this.rating = rating;
  takeout.push(this);
}


// This is the function that will take in the data entered in the form and put in the constructor function.

function handleFormSubmitted(event) {
  event.preventDefault();
  console.log('event', event);

  var nameInput = document.getElementById('name');
  var nameValue = nameInput.value;

  var walkTimeInput = document.getElementById('walk-time');
  var walkTimeValue = walkTimeInput.value;

  var waitTimeInput = document.getElementById('wait-time');
  var waitTimeValue = waitTimeInput.value;

  var priceInput = document.getElementById('price');
  var priceValue = priceInput.value;

  var ratingInput = document.getElementById('rating');
  var ratingValue = ratingInput.value;

  var newTakeout = new Takeout(nameValue, walkTimeValue, waitTimeValue, priceValue, ratingValue);

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
    new Takeout(arrayOfNotTakeout[k].name, arrayOfNotTakeout[k].walkTime, arrayOfNotTakeout[k].waitTime, arrayOfNotTakeout[k].price, arrayOfNotTakeout[k].rating);
  }

} else {

  new Takeout('Subway', '5', '2', 'med', '3star');
}
console.log('takeout', takeout);

var formElement = document.getElementById('new-takeout');
formElement.addEventListener('submit', handleFormSubmitted);

// This is the function that will render the data table.


console.log('takeout', takeout);
