// Blog sidebar toggle for mobile
var burgerButton = document.querySelector("#burgerList");
var blogList = document.querySelector("#blogList");

if (burgerButton && blogList) {
  burgerButton.addEventListener("click", function () {
    if (blogList.style.display === "flex") {
      blogList.style.display = "none";
    } else {
      blogList.setAttribute("style", "display: flex !important;");
    }
  });
}
