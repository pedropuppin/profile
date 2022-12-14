var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = 'horizontal'

  return direction;
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    document.querySelector('.navbar').classList.add('navbar-scrolled')
  } else if (window.scrollY < 56) {
    document.querySelector('.navbar').classList.remove('navbar-scrolled')
  }
})

if (window.innerWidth >= 1400) {
  strings = ["Hi there, I'm Pedro!", "Full-Stack Web Dev."]
} else {
  strings = ["Hi there,", "I'm Pedro!", "Full-Stack", "Web Dev."]
}

var typed = new Typed('#typed', {
  strings,
  typeSpeed: 50,
  loop: true
});
