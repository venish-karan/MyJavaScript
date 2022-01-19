// Functions

// function login(username, password) {
//   // code here
//   //   const name = window.prompt();
//   //   console.log(password); //undefined
//   console.log(`${username}, Logged in successfully`);
// }

// login("venish");
// login("john");

function upperCase(str) {
  //   str.toUpperCase();
  //   console.log(str.toUpperCase());
  return str.toUpperCase();
}

const upperCaseVal = upperCase("venish"); // by default function returns undefined

// console.log(upperCaseVal);

// default parameters
function calculateArea(width, height = 1) {
  // similar to height = undefined ? 1 : height;
  const area = width * height;
  return area;
}

const area = calculateArea(30); // not passing argument returns NaN => not a number

// variable scope

function download() {
  const fileName = "xyz.abc";
}

download();

// anonymous function
// function expression
const login = function () {
  console.log("Logged in");
};

login();

// callback function

const formatText = function (text, formatcb) {
  // typeof return the datatype of the variable
  return typeof formatcb === "function" ? formatcb(text) : text.toUpperCase();
};

const result = formatText("hello", function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});
console.log(result);

// IIFE (Immediately invoked function expression)
//  calls function automatically
(function setUp() {
  //   console.log("setup done!");
})();

// Arrow function

// const logout = ((username, password) => {
//   console.log("logged out");
// })();

const logout = ((username, password) => console.log("logged out"))();

// Good practices

// showUser, getUser, calcNumber

// one function = one action // it should have name of what it is doing

// function name should be descriptive not like a, b or something
