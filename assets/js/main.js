let menuBtn = document.querySelector(".navbar-toggle");

menuBtn.addEventListener("click", () => {
  document.querySelector(".toggle-menu").classList.toggle("active");
  document.querySelector("body").classList.toggle("modal-open");
  menuBtn.parentNode.classList.toggle("container");
  menuBtn.parentNode.classList.toggle("container-fluid");
});
