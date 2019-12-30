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

  // below is sending data to local storage


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

// This is the function that will render the data table.

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

  takeoutTable.appendChild(takeoutRow);


};

for (var i = 0; i <takeout.length; i++) {
  takeout[i].render();
}

console.log('takeout', takeout);
