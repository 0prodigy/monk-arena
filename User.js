class User {
  constructor({
    id,
    name,
    email,
    password,
    gender,
    picture = "./images/monk-avtar.png",
    bio = "Namaste!! I am at Monk Arena",
    blog = [],
    followers = [],
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.picture = picture;
    this.bio = bio;
    this.blog = blog;
    this.followers = followers;
  }
  getDetails() {
    return this;
  }
  addFollower(follower) {
    this.followers.push(follower);
  }
  getFollower() {
    return this.followers;
  }
}
