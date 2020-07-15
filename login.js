window.onload = () => {
  users = JSON.parse(localStorage.getItem("users")) || [];
  let signUpBtn = document.getElementById("finalsignup");
  signUpBtn.addEventListener("click", handleRegister);

  let loginbtn = document.getElementById("loginbtn");
  loginbtn.addEventListener("click", handleLogin);

  let loginToggle = document.getElementById("loginToggle");
  let signUpToggle = document.getElementById("signUpToggle");

  loginToggle.addEventListener("click", handleToogle);
  signUpToggle.addEventListener("click", handleToogle);
};

let users = [];
function validateUser(email, password) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.email == email && password == user.password) {
      return user;
    }
  }
  return false;
}

function loginUser(email, password) {
  if (validateUser(email, password)) {
    localStorage.setItem(
      "loginUser",
      JSON.stringify(validateUser(email, password))
    );
    window.location.href = "./profile.html";
  } else {
    generateError("You are not register");
  }
}

function handleLogin() {
  event.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  loginUser(email, password);
  let loginForm = document.getElementById("loginForm");
  loginForm.reset();
}

function generateError(message) {
  let errorMsg = document.getElementById("errorMsg");
  errorMsg.innerHTML = `<h5>${message}</h5>`;
  errorMsg.setAttribute("class", "p-5 fixed-top badge badge-danger d-block");
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function registerUser(name, email, password) {
  if (validateUser(email, password)) {
    console.log("User Already Exist Try login");
    generateError("User Already Exist Try login");
  } else {
    let user = new User({
      id: users.length + 1,
      name: name,
      email: email,
      password: password,
    });
    users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
}

function handleRegister() {
  event.preventDefault();
  let email = document.getElementById("signupemail").value;
  let name = document.getElementById("signupname").value;
  let password = document.getElementById("signuppassword").value;
  let confrimPassword = document.getElementById("signupPassword").value;
  let signUpForm = document.getElementById("signUpForm");
  if (password == confrimPassword) {
    registerUser(name, email, password);
    signUpForm.reset();
  } else {
    console.log(password, confrimPassword);
  }
}

function handleToogle() {
  let loginForm = document.getElementById("loginForm");
  let signUpForm = document.getElementById("signUpForm");

  if (loginForm.getAttribute("class") == "d-none") {
    signUpForm.setAttribute("class", "d-none");
    loginForm.setAttribute("class", "d-block");
  } else {
    loginForm.setAttribute("class", "d-none");
    signUpForm.setAttribute("class", "d-block");
  }
}
