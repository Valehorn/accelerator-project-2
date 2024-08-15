import { Swiper } from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const toursSwiperContainer = document.querySelector('.tours__swiper');

const initSwiperTours = () => {
  const breakpoint = window.innerWidth;
  const toursSwiper = new Swiper(toursSwiperContainer, {
    modules: [Navigation],
    speed: 900,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    lockClass: '.swiper__button--disabled',
    navigation: {
      nextEl: '.tours__swiper-button-next',
      prevEl: '.tours__swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    allowTouchMove: breakpoint < 1439,
    on: {
      slideChange: () => {
        updateToursButtons();
      },
      reachEnd: () => {
        updateToursButtons();
      },
      reachBeginning: () => {
        updateToursButtons();
      }
    }
  });

  function updateToursButtons() {
    const prevButton = document.querySelector('.tours__swiper-button-prev');
    const nextButton = document.querySelector('.tours__swiper-button-next');

    if (toursSwiper.isBeginning) {
      prevButton.classList.add('swiper__buttons--disabled');
      prevButton.disabled = true;
      toursSwiper.allowSlidePrev = false;
    } else {
      prevButton.classList.remove('swiper__buttons--disabled');
      prevButton.disabled = false;
      toursSwiper.allowSlidePrev = true;
    }

    if (toursSwiper.isEnd) {
      nextButton.classList.add('swiper__buttons--disabled');
      nextButton.disabled = true;
      toursSwiper.allowSlideNext = false;
    } else {
      nextButton.classList.remove('swiper__buttons--disabled');
      nextButton.disabled = false;
      toursSwiper.allowSlideNext = true;
    }
  }
  updateToursButtons();
};

export { initSwiperTours };
