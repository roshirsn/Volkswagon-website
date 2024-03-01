const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    effect: "cube",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
// mobile menu js
let mobileMenuIcon = document.querySelector("header .fa-bars");
let menu = document.querySelector(".navbar .menu");

mobileMenuIcon.addEventListener("click", function () {
  menu.classList.toggle("open");
});

let student = {
  name: "rsn",
  roll: 45,
  dept: "cse",
  sem: 6,
  subject: {
    main: "Maths",
  },
};
let new11 = {
  place: "kerala",
  ...student,
  dis: "kannur",
};
// let {
//   name,
//   sem,
//   subject: { main },
// } = student;
