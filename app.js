'use strict'; //strict syntax
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCustPH: 23,
  maxCustPH: 65,
  avgCS: 6.3,
  custPHArray: [],
  cookiesPHArray: [],
  // cookiesSold: 0,

  customersPH: function() {
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function(){
    for (let j = 0; j < hours.length; j++){
      let hour = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(hour);
      // this.cookiesSold += amountCookiesSold;
    }
  },
    list: function () {
    this.cookiesSoldPH();
    let listSeattle = document.getElementById(this.name);
    for (let i = 0; i < hours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} cookies`;
      listSeattle.appendChild(entry);
    
    }
    let cookies = document.createElement('li');
    cookies.textContent = `Total: ${this.cookiesSold} cookies`;
    listSeattle.appendChild(total);
  }
};


seattle.customersPH();
seattle.cookiesSoldPH();

let tokyo = {
  name: 'Tokyo',
  minCustPH:3,
  maxCustPH: 24,
  avgCS: 1.2,

  tokyoCustPHArray: [],
  tokyoCookiesPHArray: [],
  tokyoCustomersPH: function() {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.tokyoCustPHArray.push(oneHour);
    }
  },
  tokyoCookiesSoldPH: function() {
    for (let j = 0; j < hours.length; j++) {
      let hour = Math.floor(this.tokyoCustPHArray[j] * this.avgCS) + 1;
      this.tokyoCookiesPHArray.push(hour);
    }
  }
};
tokyo.tokyoCustomersPH();
tokyo.tokyoCookiesSoldPH();

let dubai = {name: 'Dubai',
  minCustPH: 11,
  maxCustPH: 38,
  avgCS: 3.7,
  custPHArray: [],
  cookiesPHArray: [],

  customersPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function () {
    for (let j = 0; j < hours.length; j++) {
      let hour = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(hour);
    }
  }
};

dubai.customersPH();
dubai.cookiesSoldPH();

let paris = {
  name: 'Paris',
  minCustPH: 20,
  maxCustPH: 38,
  avgCS: 2.3,
  custPHArray: [],
  cookiesPHArray: [],

  customersPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function () {
    for (let j = 0; j < hours.length; j++) {
      let hour = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(hour);
    }
  }
};

paris.customersPH();
paris.cookiesSoldPH();

let lima = {
  name: 'Lima',
  minCustPH: 2,
  maxCustPH: 16,
  avgCS: 4.6,
  custPHArray: [],
  cookiesPHArray: [],

  customersPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function () {
    for (let j = 0; j < hours.length; j++) {
      let hour = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(hour);
    }
  }
};

lima.customersPH();
lima.cookiesSoldPH();

seattle.list();