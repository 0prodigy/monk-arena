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
  if (validateBlog(blog)) {
    let blogPosts = JSON.parse(localStorage.getItem("blogs")) || [];
    blogPosts.push(blog);
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogPosts));
  } else {
    return;
  }
}

function validateBlog(blog) {
  let ok = true;
  if (blog.title == "") {
    console.log("Need a title");
    ok = false;
  }
  if (blog.blog == "") {
    ok = false;
    console.log("Need your thoughts");
  }
  if (blog.photo == "") {
    ok = false;
    console.log("Need photo");
  }
  return ok;
}

function getLoginUser() {
  return JSON.parse(localStorage.getItem("loginUser"))[0];
}

let blog = new Blog({
  id: blogs.length + 1,
  title: "This is title",
  blog: "This is description",
  photo: "This is photo",
  user: getLoginUser(),
});

addBlog(blog);
