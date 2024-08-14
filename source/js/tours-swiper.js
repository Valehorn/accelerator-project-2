import { Swiper } from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const reviewsSwiperContainer = document.querySelector('.tours__swiper');

const initSwiperTours = () => {
  const breakpoint = window.innerWidth;
  const reviewsSwiper = new Swiper(reviewsSwiperContainer, {
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

    if (reviewsSwiper.isBeginning) {
      prevButton.classList.add('swiper__buttons--disabled');
      prevButton.disabled = true;
      reviewsSwiper.allowSlidePrev = false;
    } else {
      prevButton.classList.remove('swiper__buttons--disabled');
      prevButton.disabled = false;
      reviewsSwiper.allowSlidePrev = true;
    }

    if (reviewsSwiper.isEnd) {
      nextButton.classList.add('swiper__buttons--disabled');
      nextButton.disabled = true;
      reviewsSwiper.allowSlideNext = false;
    } else {
      nextButton.classList.remove('swiper__buttons--disabled');
      nextButton.disabled = false;
      reviewsSwiper.allowSlideNext = true;
    }
  }
  updateToursButtons();
};

export { initSwiperTours };
