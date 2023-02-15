window.addEventListener("DOMContentLoaded", function () {
  // -----------------------------------------------------------
  // Header ----------------------------------------------------
  // -----------------------------------------------------------
  const openBtn = document.querySelector("#open-btn");
  const menuWrapper = document.querySelector(".wrapper");
  const covered = document.querySelector(".header-cover");
  openBtn.addEventListener("click", function () {
    menuWrapper.classList.toggle("-right-full");
    menuWrapper.classList.toggle("right-0");
    covered.classList.toggle("clicked");
  });
  window.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("header-cover") ||
      e.target.classList.contains("close-btn")
    ) {
      menuWrapper.classList.add("-right-full");
      menuWrapper.classList.remove("right-0");
      covered.classList.remove("clicked");
    }
  });
});
