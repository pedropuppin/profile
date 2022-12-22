// skills slider
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

// navbar onscroll color
window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    document.querySelector('.navbar').classList.add('navbar-scrolled')
  } else if (window.scrollY < 56) {
    document.querySelector('.navbar').classList.remove('navbar-scrolled')
  }
})

// typed.js
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

// btn toggle
const toggleSlider = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  window.scrollTo(0, document.body.scrollHeight);
}

// curve text
const text = document.getElementById('curved-text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const ele = text.querySelectorAll('span');
for(var i = 0; i < ele.length; i++) {
    ele[i].style.transform = "rotate("+i * 15.5 +"deg)";
}

// tattoo slider
const nav = document.getElementById("tattoo-slider"),
      track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage; //store % on mouse release
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage, //use the stored % as the new starting point
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage; //constantly track %

  track.animate({
    transform: `translate(${nextPercentage}%, -65%)`
  }, { duration: 1200, fill: "forwards" });

  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

nav.onmousedown = e => handleOnDown(e);

nav.ontouchstart = e => handleOnDown(e.touches[0]);

nav.onmouseup = e => handleOnUp(e);

nav.ontouchend = e => handleOnUp(e.touches[0]);

nav.onmousemove = e => handleOnMove(e);

nav.ontouchmove = e => handleOnMove(e.touches[0]);
