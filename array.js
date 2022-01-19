const languages = ["javascript", "python", "c"];

// console.log("Length of the array is " + languages.length);

//appends element
languages.push("Ruby");

//appends at first index
languages.unshift("Java");

// removes the last element and returns the same
console.log(languages.pop());

// removes the item from first index
languages.shift();

console.log(languages);

//loops
// for (let i = 0; i < languages.length; i++) {
//   console.log(languages[i]);
// }

const actors = [
  {
    name: "Actor 1",
    payment: 100,
  },
  {
    name: "Actor 2",
    payment: 200,
  },
  {
    name: "Actor 3",
    payment: 300,
  },
];

//for loop
for (let i = 0; i < actors.length; i++) {
  if (actors[i].name === "Actor 1") {
    actors[i].payment = actors[i].payment - 10;
  }
}

// console.log(actors);

// for each loop
actors.forEach((actor) => {
  actor.payment = actor.payment - 10;
  //   console.log(actor);
});

// for of loop
for (let actor of actors) {
  //   console.log("for of loop");
  //   console.log(actor);
}

// filter => we can remove the item that we want without changing the original array (returns new array)
// const failed = actors.filter((actor) => {
//   //   if (actor.payment <= 100) {
//   //     return true;
//   //   }

//   //   return false;
//   return actor.payment < 100;
// });

const failed = actors.filter((actor) => actor.payment < 100);

// console.log(failed);

// Map (return new array)

const actorWithPayment = actors.map((actor) => {
  // map(item itself, index of item)
  return {
    actorPayment: `${actor.name} ${actor.payment}`,
  };
});

// console.log(actorWithPayment);

// Reduce

const movies = [
  {
    name: "Interstellar",
    budget: 100,
  },
  {
    name: "Social",
    budget: 150,
  },
  {
    name: "Matrix",
    budget: 300,
  },
];

// let total = 0;

// movies.forEach((movie) => (total += movie.budget));

// reduce
const total = movies.reduce((acc, movie) => {
  // naming convention acc = accumulator
  // acc is the local varirable in the function itself
  acc = acc + movie.budget;
  return acc;
}, 0); // 0 is initial value

// console.log(total);

// IndexOf
const admins = [2, 1, 5];

const user = {
  name: "XYZ",
  id: 5,
};

const index = admins.indexOf(user.id);
// console.log(index === -1 ? "none" : admins[index]);

// includes

console.log(admins.includes(user.id));

// find
const users = [
  {
    name: "xyz",
    id: 1,
  },
  {
    name: "abc",
    id: 2,
  },
  {
    name: "pqr",
    id: 3,
  },
];

const myUser = users.find((user) => {
  return user.name === "xyz";
});

console.log(myUser);

// sort

const names = ["john", "shirish", "venish", "bhuvanesh"];

console.log(names.sort());

// splice => removes item from index for mentioned times (index, number of times delete the item)

const names = ["john", "shirish", "venish", "bhuvanesh"];

names.splice(0, 1); //  (index, number of times delete the item)
console.log(names);
