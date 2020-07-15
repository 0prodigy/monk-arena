class Blog {
  constructor({ id, title, blog, tag, user, photo }) {
    this.id = id;
    this.title = title;
    this.blog = blog;
    this.tag = tag;
    this.user = user;
    this.photo = photo;
  }

  addLikes(like) {
    this.likes = likes;
  }

  getLikes() {
    return this.likes;
  }

  getBlog() {
    return this;
  }
}
