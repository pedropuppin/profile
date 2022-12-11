var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
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
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    document.querySelector('.navbar').classList.add('navbar-scrolled')
  } else if (window.scrollY < 56) {
    document.querySelector('.navbar').classList.remove('navbar-scrolled')
  }
})

var typed = new Typed('#typed', {
  strings: ["Hi there!", "I'm Pedro Puppin"],
  typeSpeed: 50,
  loop: true
});
