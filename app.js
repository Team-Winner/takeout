'use strict';

console.log('js linked!');

function Takeout(nameOfThisRestaraunt, walkTime, waitTime, price, rating) {
  this.name = nameOfThisRestaraunt;
  this.walkTime = walkTime;
  this.waitTime = waitTime;
  this.price = price;
  this.rating = rating;
}

Takeout.prototype.render = function() {
  var takeoutTable = document.getElementById('takeout-table');
  
  var takeoutRow = document.createElement('tr');
  
  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  takeoutRow.appendChild(nameCell);

  var walkTimeCell = document.createElement('td');
  walkTimeCell.textContent = this.walkTime;
  takeoutRow.appendChild(walkTimeCell);

  var waitTimeCell = document.createElement('td');
  waitTimeCell.textContent = this.waitTime;
  takeoutRow.appendChild(waitTimeCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = this.price;
  takeoutRow.appendChild(priceCell);

  var ratingCell = document.createElement('td');
  ratingCell.textContent = this.rating;
  takeoutRow.appendChild(ratingCell);
};

var takeout = [];

for (var i =0; i <takeout.length; i++) {
  takeout[i].render();
}

function handleFormSubmitted(event) {
  event.preventDefault();
  console.log(event);

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

  newTakeout.render();
}

var formElement = document.getElementById('new-takeout');
formElement.addEventListener('submit', handleFormSubmitted);
