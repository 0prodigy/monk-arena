const user = JSON.parse(localStorage.getItem("loginUser"));
const blogs = JSON.parse(localStorage.getItem("blogs"));
const users = JSON.parse(localStorage.getItem("users"));

window.onload = () => {
  let index = window.location.href.indexOf("?");
  if (
    window.location.href.indexOf("profile.html?me") != -1 ||
    window.location.href.indexOf("?") == -1
  ) {
    renderNotification();
    renderProfileData(user);
    renderBlogPosts(user);
  } else {
    let found = findUser(window.location.href.substring(index + 1));
    renderNotification();
    renderProfileData(found);
    renderBlogPosts(found);
  }
};

function findUser(index) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == index) {
      return users[i];
    }
  }
}

function renderNotification() {
  let ul = document.createElement("ul");
  ul.setAttribute("class", "list-group list-unstyled");
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].user.id == lcoalUser.id) {
      for (let j = 0; j < blogs[i].likedby.length; j++) {
        let likeby = blogs[i].likedby[j].name;
        let li = document.createElement("li");
        li.setAttribute("class", "list-item");
        li.textContent = `Your post liked by @${likeby}`;
        ul.append(li);
      }
    }
  }
  notify.append(ul);
}

function renderProfileData(user) {
  let userAvtar = document.getElementById("userAvtar");
  userAvtar.setAttribute("src", "./images/monk-avtar.png");
  let username = document.getElementById("username");
  username.textContent = "shinobi " + user.id;
  let name = document.getElementById("name");
  name.textContent = user.name;
  let followerCount = document.getElementById("followersCount");
  followerCount.textContent = user.followers.length;
  let bio = document.getElementById("bio");
  bio.textContent = user.bio;
}

function renderBlogPosts(user) {
  let row = document.getElementById("blogRow");
  row.innerHTML = "";
  let count = 0;
  for (let i = blogs.length - 1; i >= 0; i--) {
    if (blogs[i].user.id == user.id) {
      count++;
      let col = document.createElement("div");
      col.setAttribute("class", "col-lg-4 col-md-4 col-sm-12 col-12");
      col.innerHTML = createBlogLayout(blogs[i]);
      row.append(col);
    }
  }
  let postCount = document.getElementById("postCount");
  postCount.textContent = count;
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
