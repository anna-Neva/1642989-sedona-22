const pageHeader = document.querySelector(".page-header");
const menuButton = pageHeader.querySelector(".page-header__toggle");

pageHeader.classList.remove("page-header--opened");

menuButton.addEventListener("click", function () {
  pageHeader.classList.toggle("page-header--opened");
});
