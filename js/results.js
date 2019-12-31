'use strict';

console.log('js linked!');

var takeout = [];

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

  new Takeout('Mat','Subway', '5', '2', '12', '$', '★★★☆');
  new Takeout('Sally','Mantra', '4', '10', '20', '$$', '★★★☆');
  new Takeout('Keith','Japonesa', '20', '7', '47', '$$$', '★★★★');
  new Takeout('Bella','7-11', '4', '2', '10', '$', '★☆☆☆');
  new Takeout('Drew','Buffalo Wild Wings', '16', '2', '34', '$$', '★★☆☆');
}
console.log('takeout', takeout);

// This is the function that will render the data table.

Takeout.prototype.render = function() {
  var takeoutTableBody = document.getElementById('takeout-table-body');

  var takeoutRow = document.createElement('tr');

  var userNameCell = document.createElement('td');
  userNameCell.textContent = this.username;
  takeoutRow.appendChild(userNameCell);

  var nameCell = document.createElement('td');
  nameCell.innerHTML = this.name;
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

  takeoutTableBody.appendChild(takeoutRow);


};

for (var i = 0; i <takeout.length; i++) {
  takeout[i].render();
}

console.log('takeout', takeout);

// Below are the functions for sorting takeout array based on different clicks on the table headers.

function sortByWalkTime (event) {
  takeout.sort(function (a, b) {
    return a.walkTime - b.walkTime;
  });
  var takeoutTableBody = document.getElementById('takeout-table-body');
  takeoutTableBody.innerHTML = '';
  for (var i = 0; i <takeout.length; i++) {
    takeout[i].render();
  }
}

function sortByWaitTime (event) {
  takeout.sort(function (a, b) {
    return a.waitTime - b.waitTime;
  });
  var takeoutTableBody = document.getElementById('takeout-table-body');
  takeoutTableBody.innerHTML = '';
  for (var i = 0; i <takeout.length; i++) {
    takeout[i].render();
  }
}

function sortByTotalTime (event) {
  takeout.sort(function (a, b) {
    return a.totalTime - b.totalTime;
  });
  var takeoutTableBody = document.getElementById('takeout-table-body');
  takeoutTableBody.innerHTML = '';
  for (var i = 0; i <takeout.length; i++) {
    takeout[i].render();
  }
}

// function sortByPrice (event) {
//   takeout.sort(function (a, b) {
//     if (a.price.length > b.price.length) {
//       return 1;
//     }
//     else if (b.price.length > a.price.length) {
//       return -1;
//     }
//   });

function sortByRating (event) {
  takeout.sort(function (a, b) {
    if (a.rating > b.rating) {
      return 1;
    }
    else if (b.rating > a.rating) {
      return -1;
    }
  });

  var takeoutTableBody = document.getElementById('takeout-table-body');
  takeoutTableBody.innerHTML = '';
  for (var i = 0; i <takeout.length; i++) {
    takeout[i].render();
  }
}

// sort by name
// takeout.sort(function(a, b) {
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });