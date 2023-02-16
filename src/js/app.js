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

  // -----------------------------------------------------------
  // Window scroll ---------------------------------------------
  // -----------------------------------------------------------
  const header = document.querySelector("#header");
  const nightModeBtn = document.querySelector(".night-mode");
  window.addEventListener("scroll", function () {
    if (!nightModeBtn.classList.contains("night")) {
      header.classList.toggle("light-scrolled", window.scrollY > 0);
    } else {
      header.classList.toggle("night-scrolled", window.scrollY > 0);
    }
  });

  // -----------------------------------------------------------
  // Intro slider ----------------------------------------------
  // -----------------------------------------------------------
  const swiper1 = new Swiper(".intro-swiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // -----------------------------------------------------------
  // Description slider ----------------------------------------
  // -----------------------------------------------------------
  const swiper2 = new Swiper(".description__carousel", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  // -----------------------------------------------------------
  // Night Mode ------------------------------------------------
  // -----------------------------------------------------------
  const nightIcon = document.querySelector(".night-mode > i");
  const body = document.querySelector("body");
  nightModeBtn.addEventListener("click", function () {
    if (!this.classList.contains("night")) {
      // night btn
      this.classList.add("night");
      this.classList.remove("bg-[#F5F5F5]");
      this.classList.add("bg-[#272727]");
      nightIcon.classList.add("bxs-sun", "text-white");
      nightIcon.classList.remove("bxs-moon");
      // night body
      body.classList.add("bg-[#1C1C1C]", "text-white");
      header.classList.add("bg-[#1C1C1C]");
    } else {
      // night btn
      this.classList.remove("night");
      this.classList.add("bg-[#F5F5F5]");
      this.classList.remove("bg-[#272727]");
      nightIcon.classList.remove("bxs-sun", "text-white");
      nightIcon.classList.add("bxs-moon");
      // night body
      body.classList.remove("bg-[#1C1C1C]", "text-white");
      header.classList.remove("bg-[#1C1C1C]");
    }
  });
});
