const blogs = [];

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

// let blog = new Blog({
//   id: blogs.length + 1,
//   title: "This is title",
//   blog: "This is description",
//   photo: "This is photo",
//   user: getLoginUser(),
// });

// addBlog(blog);

window.onload = () => {
  let loginUser = localStorage.getItem("loginUser");
  if (!loginUser) {
    window.location.href = "login.html";
  }
};
