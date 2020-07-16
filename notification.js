function noticeToggle() {
  notify.classList.toggle("d-none");
}
let notify = document.getElementById("notification");

window.addEventListener("load", () => {
  let noticeBtn = document.getElementById("noticeToggle");
  noticeBtn.addEventListener("click", noticeToggle);
  console.log(notify);
});
