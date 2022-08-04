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
