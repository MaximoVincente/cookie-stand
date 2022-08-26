'use strict'; //strict syntax
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let stores = [];


function CookiesSold(name, maxCustPH, minCustPH, avgCS){
  this.name = name;
  this.maxCustPH = maxCustPH;
  this.minCustPH = minCustPH;
  this.avgCS = avgCS;
  this.custPHArray = [];
  this.cookiesPHArray = [];
  this.cookiesTotal = 0;
}

function cookieNumbers (stats){
  stores.push(new CookiesSold(stats.name, stats.maxCustPH, stats.minCustPH, stats.avgCS));
}

cookieNumbers({
  name: 'Seattle',
  maxCustPH: 65,
  minCustPH: 23,
  avgCS: 6.3,
});

cookieNumbers({
  name: 'Tokyo',
  minCustPH: 3,
  maxCustPH: 24,
  avgCS: 1.2,
});

cookieNumbers({
  name: 'Dubai',
  minCustPH: 11,
  maxCustPH: 38,
  avgCS: 3.7,
});

cookieNumbers({
  name: 'Paris',
  minCustPH: 20,
  maxCustPH: 38,
  avgCS: 2.3,
});

cookieNumbers({
  name: 'Lima',
  minCustPH: 2,
  maxCustPH: 16,
  avgCS: 4.6,
});

CookiesSold.prototype.custPH = function(){
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
    this.custPHArray.push(oneHour);
  }
};

CookiesSold.prototype.cookiesPH = function() {
  this.custPH();
  for (let j = 0; j < hours.length; j++) {
    let cookiesPH = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
    this.cookiesPHArray.push(cookiesPH);
    this.cookiesTotal += cookiesPH;
  }
};

CookiesSold.prototype.displayRow = function(){
  this.cookiesPH();
  let row = document.createElement('tr');
  let storeName = document.createElement('td');
  storeName.textContent = this.name;
  row.appendChild(storeName);

  for (let sale of this.cookiesPHArray) {
    let cell = document.createElement('td');
    cell.textContent = sale;
    row.appendChild(cell);
  }

  let total = document.createElement('td');
  total.textContent = this.cookiesTotal;
  row.appendChild(total);
  tBody.appendChild(row);
};

let tBody = document.getElementById('tBody');

for (let location of stores){
  location.displayRow();
}

function footerRow(){

  let tFoot = document.getElementById('totalSales');
  let row = document.createElement('tr');
  let head = document.createElement('th');
  head.textContent = 'Total Sales Per Hour';
  row.appendChild(head);
  tFoot.appendChild(row);

  for (let hour in hours){
    let salesHour = 0;
    let cell = document.createElement('td');

    for (let store in stores){
      let currentStore = stores[store];
      let currentSales = currentStore.cookiesPHArray[hour];
      salesHour += currentSales;
    }
    cell.textContent = salesHour;
    row.appendChild(cell);
  }

  let cell = document.createElement('td');
  let totals = 0;
  for (let store of stores){
    totals += store.cookiesTotal;
  }
  cell.textContent = totals;
  row.appendChild(cell);
}
footerRow();





let formEl = document.getElementById('new-location');

let newStore = [];



formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  let { location, max_cust, min_cust, avg_cs } = event.target;

  let stand = new CookiesSold(
    location.value,
    max_cust.value,
    min_cust.value,
    avg_cs.value);

  newStore.push(stand);

  let storesEl = document.getElementById('new-location');
  storesEl.innerHTML = '';
  for (let stand of newStore) {
    stand.cookiesPH();
    console.log(stand);
  }
});
