"use strict";

const persone = {
  name: "Alex",
  tel: "+744444444",
  parents: {
    mom: " Olga",
    dad: "Mike",
  },
};
// console.log(JSON.parse(JSON.stringify(persone)));
const clone = JSON.parse(JSON.stringify(persone));
console.log(persone);
console.log(clone);

//
const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  //request.open(method, url, async, login, pass);
  request.open("GET", "current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = +inputRub.value / data.current.usd;
    } else {
      inputUsd.value = "Something went wrong";
    }
  });
});

//PROMISE ES6

console.log("Get some data...");

const req = new Promise(function (resovle, reject) {
  setTimeout(() => {
    console.log("Getting ready...");

    const product = {
      name: "TV",
      price: 2000,
    };

    resovle(product);
  }, 2000);
});

req.then((product) => {
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        product.status = "ordered";
        resovle(product);
      }, 2000);
    });
  }).then((data) => {
    data.modify = true;
    return data;
  }).then((data) => {
    console.log(data);
  }).catch(() => {
    console.error("This is error");
  }).finally(() => {
    console.log("Finally");
  });


  const test = time => {
    return new Promise(resovle => {
        setTimeout(() => resovle(), time);
    });
  };

  test(1000).then(() => console.log('1000 ms'));
  test(1000).then(() => console.log('2000 ms'));

  Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
  });

  Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
  });


//ARRAY ITERATION METHODS
// methods below return new array. forEach method returns modified old array
/// filter
const names = ['Ivan', 'Ann', 'Viktoria', 'Maximilian'];
const shortNames = names.filter(function(name) {
  return name.length < 5;
});
console.log(shortNames);

/// map
const answers = ['IvaN', 'ANna', 'Hello'];
const result = answers.map((item) => {
  return item.toLowerCase();
});
console.log(result);

/// every/some
const someArray = [4, 'qwq', 'sfreferf'];
console.log(someArray.some(item => typeof(item) === 'number'));
console.log(someArray.every(item => typeof(item) === 'number'));

/// reduce
const arr = [4, 5, 1, 3, 2, 6];
const result1 = arr.reduce((sum, current) => sum + current, 3);
console.log(result1);

const arr1 = ['pear', 'lemon', 'apple'];
const result2 = arr1.reduce((sum, current) => `${sum}, ${current}`);
console.log(result2);

const someObj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};
const newArray = Object.entries(someObj)
.filter(item => item[1] === 'persone')
.map((item) => item[0]);
console.log(newArray);