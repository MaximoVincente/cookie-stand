'use strict'; //strict syntax
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let seattle = {
  name: 'Seattle',
  minCustPH: 23,
  maxCustPH: 65,
  avgCS: 6.3,
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
    let listSeattle = document.getElementById(this.name);
    for (let i = 0; i < hours.length; i++) {
      let entry = document.createElement('ul');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} Cookies`;
      listSeattle.appendChild(entry);

    }
    let cookies = document.createElement('ul');
    cookies.textContent = `Total: ${this.cookiesSold} Cookies`;
    listSeattle.appendChild(cookies);
  }
};


seattle.customersPH();
seattle.cookiesSoldPH();

let tokyo = {
  name: 'Tokyo',
  minCustPH: 3,
  maxCustPH: 24,
  avgCS: 1.2,
  cookiesSold: 0,

  tokyoCustPHArray: [],
  tokyoCookiesPHArray: [],
  tokyoCustomersPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + 1;
      this.tokyoCustPHArray.push(oneHour);
    }
  },
  tokyoCookiesSoldPH: function () {
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
      let entry = document.createElement('ul');
      entry.textContent = `${hours[i]}: ${this.tokyoCookiesPHArray[i]} Cookies`;
      listTokyo.appendChild(entry);

    }
    let cookies = document.createElement('ul');
    cookies.textContent = `Total: ${this.cookiesSold} Cookies`;
    listTokyo.appendChild(cookies);
  }
};

tokyo.tokyoCustomersPH();
tokyo.tokyoCookiesSoldPH();

let dubai = {
  name: 'Dubai',
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
      let entry = document.createElement('ul');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} Cookies`;
      listDubai.appendChild(entry);

    }
    let cookies = document.createElement('ul');
    cookies.textContent = `Total: ${this.cookiesSold} Cookies`;
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
      let entry = document.createElement('ul');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} Cookies`;
      listParis.appendChild(entry);

    }
    let cookies = document.createElement('ul');
    cookies.textContent = `Total: ${this.cookiesSold} Cookies`;
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
      let entry = document.createElement('ul');
      entry.textContent = `${hours[i]}: ${this.cookiesPHArray[i]} Cookies`;
      listLima.appendChild(entry);

    }
    let cookies = document.createElement('ul');
    cookies.textContent = `Total: ${this.cookiesSold} Cookies`;
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
