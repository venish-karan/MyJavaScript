// DOM manipulation Document object model

// 1. getElementById

// const heading = document.getElementById("heading");
// //.innerText = "Yes it is");
// console.log(heading);

// getElementByTagName

// const heading = document.getElementsByTagName('h1');

// console.log(heading[0]);

// getElementsByClassName

// querySelector

// const heading = document.querySelector("#heading");

// traverse node

// parent node property
// const parent = heading.parentNode;

// childnode property

// const parent = document.querySelector(".parent");

// console.log(parent.childNodes);

// nextElementSibling

// const heading = document.querySelector("#heading");

// console.log(heading.nextElementSibling);

// it will get first h3 element
// const subHeading = document.querySelector("h3");

// console.log(subHeading.previousElementSibling);

// Manipulation

// const heading = document.querySelector(".heading");

// heading.innerHTML = "web dev is awesome";

// heading.style.color = "red";

// heading.style.fontSize = "100px";

// heading.classList.add("title"); // remove

// create elements

// const heading = document.createElement("h1");
// heading.innerText = "This is newly created node";
// heading.classList.add("title");

// const subHeading = document.createElement("h1");
// subHeading.innerText = "This is newly created node";
// subHeading.classList.add("nextHeading");

// const parent = document.querySelector(".parent");
// parent.appendChild(heading);

// heading.insertAdjacentElement("beforebegin", subHeading); // afterend

// Events
const button = document.querySelector("#btn");
const heading = document.querySelector("#heading");

btn.addEventListener("click", (event) => {
  console.log(event);
  heading.style.color = "red";
});
