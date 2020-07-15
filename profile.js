const user = JSON.parse(localStorage.getItem("loginUser"));

window.onload = () => {
  renderProfileData();
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
