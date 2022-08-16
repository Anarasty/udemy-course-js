"use strict";

const btnPhone = document.querySelector("#iphone");
const btnMacbook = document.querySelector("#macbook");
const images = document.querySelectorAll("img");

// const phoneAnimation = images[0].animate([
//     {transform: 'translateY(0)'},
//     {transform: 'translateY(100px)'},
//     {transform: 'translateY(-100px)'},
//     {transform: 'translateY(0)'}
// ], {
//     duration: 3000,
//     iterations: Infinity
// });

let phoneAnimation;
btnPhone.addEventListener("click", () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        { transform: "translateY(0) rotate(0deg)", filter: "opacity(100%)" },
        {
          transform: "translateY(100px) rotate(180deg)",
          filter: "opacity(50%)",
        },
        {
          transform: "translateY(-100px) rotate(270deg)",
          filter: "opacity(75%)",
        },
        { transform: "translateY(0) rotate(360deg)", filter: "opacity(100%)" },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (phoneAnimation.playState === "paused") {
    phoneAnimation.play();
  } else {
    phoneAnimation.pause();
  }
});


/// EVENT LOOP
console.log(1);
setTimeout(() => {
  console.log('timeout');
}, 2000);
setTimeout(() => {
  console.log('timeout_4000');
}, 4000);
console.log(2);

let k = 0;
function count() {
  for(let i = 0; i < 1e9; i++) {
    k++;
  }
  alert('done');
}
count();


setTimeout(() => {
  console.log(1);
}, 0);
console.log(2);