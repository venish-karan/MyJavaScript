// scenario

// function waitForSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (ms > new Date()) {}
// }

function register(callback) {
  //   waitForSeconds();
  setTimeout(() => {
    console.log("register end");
    callback();
  }, 3000);
}

function sendEmail(cb) {
  //   waitForSeconds();
  setTimeout(() => {
    console.log("Email end");
    cb();
  }, 3000);
}

function login(cb) {
  setTimeout(() => {
    console.log("login end");
    cb();
  }, 3000);
}

function getUserData(cb) {
  setTimeout(() => {
    console.log("get user end");
    cb();
  }, 3000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("display data end");
  }, 3000);
}

// this is callback (this is also called as callback hell)
register(function () {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData();
      });
    });
  });
});

console.log("other application work");
