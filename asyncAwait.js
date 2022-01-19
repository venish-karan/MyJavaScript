// async await

// scenario

// function waitForSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (ms > new Date()) {}
// }

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve("success"); // parameter for then
      //   return reject("error while registering");
    }, 3000);
  });

  //   waitForSeconds();
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email end");
      // return reject("error in sending email");
      resolve();
    }, 3000);
  });
  //   waitForSeconds();
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve();
    }, 3000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get user end");
      resolve();
    }, 3000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display data end");
      resolve();
    }, 3000);
  });
}

// we should call the function with name only not with brackets because if we do that it will run synchronous which means it will run first without obeying the order
// register()
//   .then(sendEmail) // resoleve parameter here
//   .then(login)
//   .then(getUserData)
//   .catch((error) => {
//     console.log("error:", error); // reject parameter here
//   });

// by default it returns promise
async function authenticate() {
  try {
    const message = await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

authenticate().then(() => {
  console.log("all set!");
});
//   .catch((error) => {
//     console.log(error);
//   });

console.log("other application work");
