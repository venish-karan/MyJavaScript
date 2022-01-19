// scenario

// function waitForSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (ms > new Date()) {}
// }

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve(); // parameter for then
      //   return reject("error while registering");
    }, 3000);
  });

  //   waitForSeconds();
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email end");
    }, 3000);
    resolve();
  });
  //   waitForSeconds();
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
    }, 3000);
    resolve();
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get user end");
    }, 3000);
    resolve();
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display data end");
    }, 3000);
    resolve();
  });
}

// we should call the function with name only not with brackets because if we do that it will run synchronous which means it will run first without obeying the order
register()
  .then(sendEmail) // resoleve parameter here
  .then(login)
  .then(getUserData)
  .catch((error) => {
    console.log("error:", error); // reject parameter here
  });

console.log("other application work");
