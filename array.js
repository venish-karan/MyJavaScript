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
  acc = acc + movie.budget;
  return acc;
}, 0); // 0 is initial value

// console.log(total);
