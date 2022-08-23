'use strict'; //strict syntax
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCustPH: 23,
  maxCustPH: 65,
  avgCS: 6.3,
  custPHArray: [],
  cookiesPHArray: [],
  cookiesSold: 0,

  customersPH: function() {
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function(){
    for (let j = 0; j < hours.length; j++){
      let cookiesPH = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(cookiesPH);
      this.cookiesSold += cookiesPH;
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
    listSeattle.appendChild(cookies);
  }
};


seattle.customersPH();
seattle.cookiesSoldPH();

let tokyo = {
  name: 'Tokyo',
  minCustPH:3,
  maxCustPH: 24,
  avgCS: 1.2,
  cookiesSold: 0,

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
      let cookiesPH = Math.floor(this.tokyoCustPHArray[j] * this.avgCS) + 1;
      this.tokyoCookiesPHArray.push(cookiesPH);
      this.cookiesSold += cookiesPH;
    }
  },
  list: function () {
    this.tokyoCookiesSoldPH();
    let listTokyo = document.getElementById(this.name);
    for (let i = 0; i < hours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${hours[i]}: ${this.tokyoCookiesPHArray[i]} cookies`;
      listTokyo.appendChild(entry);

    }
    let cookies = document.createElement('li');
    cookies.textContent = `Total: ${this.cookiesSold} cookies`;
    listTokyo.appendChild(cookies);
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
  cookiesSold: 0,

  customersPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function () {
    for (let j = 0; j < hours.length; j++) {
      let cookiesPH = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(cookiesPH);
      this.cookiesSold += cookiesPH;
    }
  },
  list: function () {
    this.cookiesSoldPH();
    let listDubai = document.getElementById(this.name);
    for (let i = 0; i < hours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} cookies`;
      listDubai.appendChild(entry);

    }
    let cookies = document.createElement('li');
    cookies.textContent = `Total: ${this.cookiesSold} cookies`;
    listDubai.appendChild(cookies);
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
  cookiesSold: 0,

  customersPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function () {
    for (let j = 0; j < hours.length; j++) {
      let cookiesPH = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(cookiesPH);
      this.cookiesSold += cookiesPH;
    }
  },
  list: function () {
    this.cookiesSoldPH();
    let listParis = document.getElementById(this.name);
    for (let i = 0; i < hours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} cookies`;
      listParis.appendChild(entry);

    }
    let cookies = document.createElement('li');
    cookies.textContent = `Total: ${this.cookiesSold} cookies`;
    listParis.appendChild(cookies);
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
  cookiesSold: 0,

  customersPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.custPHArray.push(oneHour);
    }
  },
  cookiesSoldPH: function () {
    for (let j = 0; j < hours.length; j++) {
      let cookiesPH = Math.floor(this.custPHArray[j] * this.avgCS) + 1;
      this.cookiesPHArray.push(cookiesPH);
      this.cookiesSold += cookiesPH;
    }
  },
  list: function () {
    this.cookiesSoldPH();
    let listLima = document.getElementById(this.name);
    for (let i = 0; i < hours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} cookies`;
      listLima.appendChild(entry);

    }
    let cookies = document.createElement('li');
    cookies.textContent = `Total: ${this.cookiesSold} cookies`;
    listLima.appendChild(cookies);
  }
};

lima.customersPH();
lima.cookiesSoldPH();

seattle.list();
tokyo.list();
dubai.list();
paris.list();
lima.list();
