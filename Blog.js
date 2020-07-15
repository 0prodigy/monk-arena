class Blog {
  constructor({
    id,
    title,
    blog,
    tag,
    user,
    photo,
    comments = [],
    likes = 0,
    likedby = [],
  }) {
    this.id = id;
    this.title = title;
    this.blog = blog;
    this.tag = tag;
    this.user = user;
    this.photo = photo;
    this.comments = comments;
    this.likes = likes;
    this.likedby = likedby;
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
