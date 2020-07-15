let users = [];

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
