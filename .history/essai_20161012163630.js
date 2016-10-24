"use strict";

var evens = [2,4,6,8,10,16,20];
var fives = [];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * 2);
    }

    return numbers;
  };

  return example();
}

export var square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 8, 15, 16, 23, 42]

