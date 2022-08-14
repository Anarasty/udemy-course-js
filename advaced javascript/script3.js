"use strict";

// Errors
try {
  console.log("Normal");
  console.log(a);
  console.log("result");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
}

console.log("still normal");

// Creating errors
const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "2", ///delete ID
    tag: "nav",
  },
  {
    id: "circle",
    tag: "", // add tag
  },
];

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id) {
      throw new SyntaxError(`Error in data number ${i + 1}, no id`);
    }

    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (e) {
  if (e.name === "SyntaxError") {
    console.log(e.message);
  } else {
    throw e;
  }
}

const err = new Error("dddd");
console.log(err.name, err.message, err.stack);
