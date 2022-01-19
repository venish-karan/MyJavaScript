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

for (let actor of actors) {
  console.log("for of loop");
  console.log(actor);
}
