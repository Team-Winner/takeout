'use strict';

console.log('js linked!');

var takeout = [];

// 27DEC 1613. Function is now taking in the data from the form. Next steps are to put the data into local storage and then pull the info out of local storage to render on the results page. The render function has been writen but is commented out.

// Below is my constructor function.

function Takeout(username1, nameOfThisRestaraunt, walkTime, waitTime, totalTime, price, rating) {
  this.username = username1;
  this.name = nameOfThisRestaraunt;
  this.walkTime = parseInt(walkTime, 10);
  this.waitTime = parseInt(waitTime, 10);
  this.totalTime = this.walkTime + this.waitTime + this.walkTime;
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
    new Takeout(arrayOfNotTakeout[k].username,arrayOfNotTakeout[k].name, arrayOfNotTakeout[k].walkTime, arrayOfNotTakeout[k].waitTime, arrayOfNotTakeout[k].totalTime, arrayOfNotTakeout[k].price, arrayOfNotTakeout[k].rating);
  }

} else {

  new Takeout('mat','Subway', '5', '2', '12', 'low', '3star');
  new Takeout('teddy','Mantra', '4', '10', '20', 'med', '3star');
  new Takeout('bella','7-11', '4', '2', '10', 'low', '1star');
}
console.log('takeout', takeout);

// This is the function that will render the data table.

Takeout.prototype.render = function() {
  var takeoutTable = document.getElementById('takeout-table');

  var takeoutRow = document.createElement('tr');

  var userNameCell = document.createElement('td');
  userNameCell.textContent = this.username;
  takeoutRow.appendChild(userNameCell);

  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  takeoutRow.appendChild(nameCell);

  var walkTimeCell = document.createElement('td');
  walkTimeCell.textContent = this.walkTime;
  takeoutRow.appendChild(walkTimeCell);

  var waitTimeCell = document.createElement('td');
  waitTimeCell.textContent = this.waitTime;
  takeoutRow.appendChild(waitTimeCell);

  var totalTimeCell = document.createElement('td');
  totalTimeCell.textContent = this.totalTime;
  takeoutRow.appendChild(totalTimeCell);

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

