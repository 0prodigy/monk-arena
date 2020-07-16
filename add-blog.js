let blogs = [];

window.onload = () => {
  blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  let blogPublishBtn = document.getElementById("blogPublish");
  let blogCancel = document.getElementById("blogCancel");
  blogPublishBtn.addEventListener("click", publishBlog);
  blogCancel.addEventListener("click", () => {
    window.location.href = "./profile.html";
  });
};

function publishBlog() {
  let title = document.getElementById("blog-title-input").value;
  let photo = document.getElementById("blog-thumb-img").value;
  let blogDesc = document.getElementById("blog-desc-input").value;
  let blog = new Blog({
    id: blogs.length + 1,
    title: title,
    blog: blogDesc,
    photo: photo || "./images/add-post.svg",
    user: getlcoalUser(),
  });

  addBlog(blog);
  title = "";
  photo = "";
  blogDesc = "";
  window.location.href = "./profile.html?me";
}

function addBlog(blog) {
  if (validateBlog(blog)) {
    let blogPosts = JSON.parse(localStorage.getItem("blogs")) || [];
    blogPosts.push(blog);
    blogs.push(blog);
    // addTouser(blog);
    localStorage.setItem("blogs", JSON.stringify(blogPosts));
  } else {
    return;
  }
}

function validateBlog(blog) {
  let ok = true;
  if (blog.title == "") {
    ok = false;
    generateError("Need a title");
  }
  if (blog.blog == "") {
    ok = false;
    generateError("Need your thoughts");
  }
  if (blog.photo == "") {
    ok = false;
    generateError("Need photo");
  }
  return ok;
}
