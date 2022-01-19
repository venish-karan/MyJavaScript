// Asynchronous Javascript

// 1.from server fetching data
// 2.for event listener async is used like button

setTimeout(() => {
  console.log("I am from set time out");
}, 3000); // 3s = 3000ms delay second

console.log("heloo");

const greeting = () => {
  console.log("from set time out greeting");
};

setTimeout(greeting, 3000);

console.log("Start");
setTimeout(() => {
  console.log("I am from time out, hi!");
}, 0);
console.log("End");
