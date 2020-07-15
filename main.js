const users = [];
const blogs = [];

let user = new User({
  id: 1,
  name: "akash",
  email: "pathakvikash9211",
  password: "123",
  blog: ["this", "that"],
});

users.push(user);

function validateUser(email, password) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.email == email && password == user.password) {
      return user;
    }
  }
  return false;
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
    users.push(user);
  }
}

registerUser("vikash@gmail.com", "1234");
console.log(users);

let blog = new Blog({
  id: blogs.length + 1,
  title: "This is title",
  blog: "This is description",
  tag: ["react", "js"],
  user: users[0].id,
});

function addBlog(blog) {
  blogs.push(blog);
}
addBlog(blog);

console.log(blogs[0].getBlog());

users[0].addFollower(users[1].id);
console.log(users[0].getFollower());
