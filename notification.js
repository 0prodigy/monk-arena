function noticeToggle() {
  notify.classList.toggle("d-none");
}
let notify = document.getElementById("notification");
let serachResult = document.getElementById("userSearchResult");
let searchbar = document.getElementById("searchbar");

function serachUser() {
  let users = JSON.parse(localStorage.getItem("users"));
  let row = document.createElement("div");
  serachResult.classList.remove("d-none");
  row.setAttribute("class", "row w-100 mx-auto my-2");
  row.innerHTML = '<h4 class="text-center">No Result Found</h4>';
  row.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].name.toLowerCase().indexOf(searchbar.value.toLowerCase()) !=
        -1 ||
      users[i].email.toLowerCase().indexOf(searchbar.value) != -1
    ) {
      let col = document.createElement("div");
      col.setAttribute("class", "col-12");
      col.innerHTML = `<div class="d-flex justify-content-around">
            <div class="follower-img">
              <img
                src="${users[i].picture}"
                alt=""
                class="img-fluid"
                width="50px"
              />
            </div>
            <div class="follower-name">
              <h4>${users[i].name}</h4>
            </div>
            <div class="follow-btn">
              <a href="./profile.html?${users[i].id}" class="btn btn-success">
                Profile
              </a>
            </div>
          </div>`;
      row.append(col);
    }
  }
  serachResult.append(row);
}

window.addEventListener("load", () => {
  let noticeBtn = document.getElementById("noticeToggle");
  noticeBtn.addEventListener("click", noticeToggle);
  searchbar.addEventListener("keydown", debounce(serachUser, 3000));
});

let body = document.querySelector("body");

body.addEventListener("click", () => {
  serachResult.classList.add("d-none");
});

function debounce(func, delay) {
  let deb;
  return function () {
    clearTimeout(deb);
    deb = setTimeout(func, delay);
  };
}
