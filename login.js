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
  } else {
    console.log("You are not register");
  }
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

window.onload = () => {
  users = JSON.parse(localStorage.getItem("users")) || [];
  let signUpBtn = document.getElementById("finalsignup");
  signUpBtn.addEventListener("click", handleRegister);

  let loginToggle = document.getElementById("loginToggle");
};
