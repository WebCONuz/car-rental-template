window.addEventListener("DOMContentLoaded", function () {
  // -----------------------------------------------------------
  // Header ----------------------------------------------------
  // -----------------------------------------------------------
  const openBtn = document.querySelector("#open-btn");
  const menuWrapper = document.querySelector(".wrapper");
  const covered = document.querySelector(".header-cover");
  openBtn.addEventListener("click", function () {
    menuWrapper.classList.toggle("active");
    covered.classList.toggle("clicked");
  });
  window.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("header-cover") ||
      e.target.classList.contains("close-btn")
    ) {
      menuWrapper.classList.remove("active");
      covered.classList.remove("clicked");
    }
  });

  // modal
  const loginBtn = document.querySelector(".loginBtn");
  const loginModal = document.querySelector(".login-modal");
  loginBtn.addEventListener("click", function () {
    loginModal.classList.add("show");
  });
  window.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("bx-x") ||
      e.target.classList.contains("login-modal")
    )
      loginModal.classList.remove("show");
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
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  // -----------------------------------------------------------
  // Dark Mode ------------------------------------------------
  // -----------------------------------------------------------
  const body = document.querySelector("body");
  const nightIcon = document.querySelector(".night-mode > i");
  const bgGray = document.querySelectorAll(".color-gray");
  const hoverBgGray = document.querySelectorAll(".hover-color-gray");
  const bgWhite = document.querySelectorAll(".bgWhite");
  const bgDark = document.querySelectorAll(".bgDark");
  const grayText = document.querySelectorAll(".grayText");
  const textDark = document.querySelectorAll(".textDark");
  const hoverTextDark = document.querySelectorAll(".hoverTextDark");
  const lgTextDark = document.querySelectorAll(".lgTextDark");
  const textWhite = document.querySelectorAll(".textWhite");
  const shadow = document.querySelectorAll(".elm-shadow");
  const btnBorder = document.querySelectorAll(".btnBorder");
  const borderElm = document.querySelectorAll(".border-elm");
  const lightImages = document.querySelectorAll(".light-img");
  const darkImages = document.querySelectorAll(".dark-img");

  function changeBg(element, class1, class2) {
    element.forEach((item) => {
      item.classList.remove(class1);
      item.classList.add(class2);
    });
  }

  // console.log(hoverBgGray[0].classList);

  nightModeBtn.addEventListener("click", function () {
    if (!this.classList.contains("night")) {
      // Dark Mode
      this.classList.add("night");
      this.classList.add("hover:bg-[#404040]");
      this.classList.remove("hover:bg-[#d8d8d8]");
      nightIcon.classList.add("bxs-sun");
      nightIcon.classList.remove("bxs-moon");
      body.classList.add("bg-[#1C1C1C]", "text-white");

      changeBg(bgGray, "bg-[#F5F5F5]", "bg-[#272727]");
      changeBg(bgWhite, "bg-white", "bg-[#1C1C1C]");
      changeBg(bgDark, "bg-[#000]", "bg-white");
      changeBg(grayText, "text-[#555555]", "text-[#BABABA]");
      changeBg(textDark, "text-[#000]", "text-white");
      changeBg(hoverTextDark, "hover:text-[#000]", "hover:text-white");
      changeBg(hoverTextDark, "hover:border-[#000]", "hover:border-white");
      changeBg(lgTextDark, "lg:text-[#000]", "lg:text-white");
      changeBg(hoverBgGray, "lg:hover:bg-[#F5F5F5]", "lg:hover:bg-[#272727]");
      changeBg(textWhite, "text-white", "text-[#000]");
      changeBg(shadow, "elm-shadow", "dark-shadow");
      changeBg(btnBorder, "border-[#E5E7EA]", "border-[#333333]");
      changeBg(btnBorder, "hover:bg-[#E5E7EA]", "hover:bg-[#333333]");
      changeBg(borderElm, "border-gray-300", "border-[#333333]");
      changeBg(lightImages, "inline-block", "hidden");
      changeBg(darkImages, "hidden", "inline-block");
    } else {
      // Light Mode
      this.classList.remove("night");
      this.classList.remove("hover:bg-[#404040]");
      this.classList.add("hover:bg-[#d8d8d8]");
      nightIcon.classList.remove("bxs-sun");
      nightIcon.classList.add("bxs-moon");
      body.classList.remove("bg-[#1C1C1C]", "text-white");

      changeBg(bgGray, "bg-[#272727]", "bg-[#F5F5F5]");
      changeBg(bgWhite, "bg-[#1C1C1C]", "bg-white");
      changeBg(bgDark, "bg-white", "bg-[#000]");
      changeBg(grayText, "text-[#BABABA]", "text-[#555555]");
      changeBg(textDark, "text-white", "text-[#000]");
      changeBg(hoverTextDark, "hover:text-white", "hover:text-[#000]");
      changeBg(hoverTextDark, "hover:border-white", "hover:border-[#000]");
      changeBg(lgTextDark, "lg:text-white", "lg:text-[#000]");
      changeBg(hoverBgGray, "lg:hover:bg-[#272727]", "lg:hover:bg-[#F5F5F5]");
      changeBg(textWhite, "text-[#000]", "text-white");
      changeBg(shadow, "dark-shadow", "elm-shadow");
      changeBg(btnBorder, "border-[#333333]", "border-[#E5E7EA]");
      changeBg(btnBorder, "hover:bg-[#333333]", "hover:bg-[#E5E7EA]");
      changeBg(borderElm, "border-[#333333]", "border-gray-300");
      changeBg(lightImages, "hidden", "inline-block");
      changeBg(darkImages, "inline-block", "hidden");
    }
  });

  // -----------------------------------------------------------
  // Products --------------------------------------------------
  // -----------------------------------------------------------
  const compactBtn = this.document.querySelector(".conpactBtn");
  const sportBtn = this.document.querySelector(".sportBtn");
  const vansBtn = this.document.querySelector(".vansBtn");

  const allBtn = this.document.querySelectorAll(".all-btn");
  const allCars = this.document.querySelectorAll(".all-cars");
  const compactCars = this.document.querySelectorAll(".compact");
  const sportCars = this.document.querySelectorAll(".sport");
  const vansCars = this.document.querySelectorAll(".vans");

  changeBg(allCars, "block", "hidden");
  changeBg(compactCars, "hidden", "block");

  compactBtn.addEventListener("click", function () {
    allBtn.forEach((item) => {
      item.classList.remove(
        "bg-[#299764]",
        "border-[#299764]",
        "hover:bg-[#077743]",
        "hover:border-[#077743]",
        "text-white"
      );
      item.classList.add("bg-white", "border-[#E5E7EA]", "hover:bg-[#E5E7EA]");
    });
    this.classList.remove("bg-white", "border-[#E5E7EA]", "hover:bg-[#E5E7EA]");
    this.classList.add(
      "bg-[#299764]",
      "border-[#299764]",
      "hover:bg-[#077743]",
      "hover:border-[#077743]",
      "text-white"
    );

    changeBg(allCars, "block", "hidden");
    changeBg(compactCars, "hidden", "block");
  });
  sportBtn.addEventListener("click", function () {
    allBtn.forEach((item) => {
      item.classList.remove(
        "bg-[#299764]",
        "border-[#299764]",
        "hover:bg-[#077743]",
        "hover:border-[#077743]",
        "text-white"
      );
      item.classList.add("bg-white", "border-[#E5E7EA]", "hover:bg-[#E5E7EA]");
    });
    this.classList.remove("bg-white", "border-[#E5E7EA]", "hover:bg-[#E5E7EA]");
    this.classList.add(
      "bg-[#299764]",
      "border-[#299764]",
      "hover:bg-[#077743]",
      "hover:border-[#077743]",
      "text-white"
    );

    changeBg(allCars, "block", "hidden");
    changeBg(sportCars, "hidden", "block");
  });
  vansBtn.addEventListener("click", function () {
    allBtn.forEach((item) => {
      item.classList.remove(
        "bg-[#299764]",
        "border-[#299764]",
        "hover:bg-[#077743]",
        "hover:border-[#077743]",
        "text-white"
      );
      item.classList.add("bg-white", "border-[#E5E7EA]", "hover:bg-[#E5E7EA]");
    });
    this.classList.remove("bg-white", "border-[#E5E7EA]", "hover:bg-[#E5E7EA]");
    this.classList.add(
      "bg-[#299764]",
      "border-[#299764]",
      "hover:bg-[#077743]",
      "hover:border-[#077743]",
      "text-white"
    );

    changeBg(allCars, "block", "hidden");
    changeBg(vansCars, "hidden", "block");
  });
});
