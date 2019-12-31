'use strict';

console.log('js linked!');

var takeout = [];

// Below is my constructor function.

function Takeout( nameOfThisRestaraunt, walkTime, waitTime, totalTime, price, rating) {
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
    new Takeout(arrayOfNotTakeout[k].name, arrayOfNotTakeout[k].walkTime, arrayOfNotTakeout[k].waitTime, arrayOfNotTakeout[k].totalTime, arrayOfNotTakeout[k].price, arrayOfNotTakeout[k].rating);
  }

} else {

  new Takeout('Subway', '5', '2', '12', 'low', '3star');
  new Takeout('Mantra', '4', '10', '20', 'med', '3star');
  new Takeout('7-11', '4', '2', '10', 'low', '1star');
}
console.log('takeout', takeout);

// This is the function that will render the data table.

Takeout.prototype.render = function() {
  var takeoutTableBody = document.getElementById('takeout-table-body');

  var takeoutRow = document.createElement('tr');

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

function sortByTotalTime (event) {
  takeout.sort(function (a, b) {
    return a.totalTime - b.totalTime;
  });
  var takeoutTableBody = document.getElementById('takeout-table-body');
  takeoutTableBody.innerHTML = '';
  for (var i = 0; i <takeout.length; i++) {
    takeout[i].render();
  }
};

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

// Below is the function for sorting the table. Reference from w3schools.
// https://www.w3schools.com/howto/howto_js_sort_table.asp

// Takeout.prototype.sortTable = function(n) {
//   var table, rows, x, y, shouldSwitch, switchcount = 0;

//   var switching = true;
//   var dir = "asc";

//   table = document.getElementById("takeout-table");

  

//   while (switching) {
//     switching = false;
//     rows = table.rows;
//     for (var i = 2; i < rows.length; i++) {
//       shouldSwitch = false;
//       debugger;
//       x = rows[i].getElementsByTagName("td")[n];
//       console.log('hello, im x', x)
//       y = rows[i + 1].getElementsByTagName("td")[n];
//       if (dir == "asc") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           shouldSwitch = true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       switchcount ++;
//     } else {
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }

// };