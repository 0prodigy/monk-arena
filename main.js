const users = [];
const blogs = [];

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

function registerUser(email, password) {
  if (validateUser(email, password)) {
    console.log("User Already Exist Try login");
  } else {
    let user = new User({
      id: users.length + 1,
      email: email,
      password: password,
    });
    let registerUsers = JSON.parse(localStorage.getItem("users")) || [];
    registerUsers.push(user);
    localStorage.setItem("users", JSON.stringify(registerUsers));
    users.push(user);
  }
}

registerUser("pathakvikash@9211", "1234");
loginUser("pathakvikash@9211", "12345");

function addBlog(blog) {
  blogs.push(blog);
}
