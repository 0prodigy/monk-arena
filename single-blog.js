let blogs = [];

window.onload = () => {
  blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  let index = window.location.href.indexOf("?");
  let found = findBlog(window.location.href.substring(index + 1));
  createBlogPost(found);
};

function findBlog(index) {
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id == index) {
      return blogs[i];
    }
  }
}

function createBlogPost(blog) {
  let post = document.getElementById("post");
  post.innerHTML = "";
  let html = `
    <div class="container">
    <h2 class="text-center text-info my-4">
      ${blog.title}
    </h2>
    <img
      style="height: 400px; width: 720px;"
      class="align-center offset-lg-2 offset-sm-0 offset-md-2"
      src="${blog.photo}"
    />
    <div class="row my-3">
      <div class="offset-2 col-8 text-center">
        <h6 class="text-left text-grey">
          ${blog.blog.substring(0, 550)}
          <hr>
          ${blog.blog.substring(550, 1550)}
          <hr>
          ${blog.blog.substring(1550, 4500)}
          <hr>
          ${blog.blog.substring(4500)}
        </h6>
      </div>
    </div>
  </div>`;
  post.innerHTML = html;
}
