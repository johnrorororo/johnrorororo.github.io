const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach (link => {
  link.addEventListener("click", () =>  menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
      768: {
        slidesPerView: 2
    },
      1024: {
        slidesPerView: 3
    }
  }
});

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector('.contact-form input[type="text"]').value;
  const email = document.querySelector('.contact-form input[type="email"]').value;
  const message = document.querySelector('.contact-form textarea').value;


  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);



  document.querySelector('.contact-form').reset();

  alert("Message Submitted!");
});