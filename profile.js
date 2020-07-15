const user = JSON.parse(localStorage.getItem("loginUser"));
const blogs = JSON.parse(localStorage.getItem("blogs"));

window.onload = () => {
  renderProfileData();
  renderBlogPosts();
};

function renderProfileData() {
  let userAvtar = document.getElementById("userAvtar");
  userAvtar.setAttribute("src", "./images/monk-avtar.png");
  let username = document.getElementById("username");
  username.textContent = "shinobi " + user.id;
  let name = document.getElementById("name");
  name.textContent = user.name;
  let postCount = document.getElementById("postCount");
  postCount.textContent = user.blog.length;
  let followerCount = document.getElementById("followersCount");
  followerCount.textContent = user.followers.length;
  let bio = document.getElementById("bio");
  bio.textContent = user.bio;
}

function renderBlogPosts() {
  let row = document.getElementById("blogRow");
  row.innerHTML = "";
  for (let i = blogs.length - 1; i >= 0; i--) {
    if (blogs[i].user.id == user.id) {
      let col = document.createElement("div");
      col.setAttribute("class", "col-lg-4 col-md-4 col-sm-12 col-12");
      col.innerHTML = createBlogLayout(blogs[i]);
      row.append(col);
    }
  }
}

function createBlogLayout(blog) {
  let html = `
      <div class="post-container">
        <a class="post" href="#">
          <div class="post-img">
            <img src="${blog.photo}" alt="" class="img-fluid" />
          </div>
          <div class="post-body">
            <span class="badge badge-primary">${blog.id}</span>
            <span class="badge badge-success">${
              blog.user.name || "Anonymous"
            }</span>
            <div class="post-title">
              <h3>${blog.title}</h3>
            </div>
            <p class="post-content">
              ${blog.blog.substring(0, 140)}...
            </p>
          </div>
        </a>
      </div>`;
  return html;
}
