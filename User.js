class User {
  constructor({ id, name, email, password, gender, picture, bio }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.picture = picture;
    this.bio = bio;
  }
  getDetails() {
    return this;
  }
}
