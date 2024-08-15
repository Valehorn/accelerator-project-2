import { Swiper } from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const trainingSwiperContainer = document.querySelector('.training__swiper');

const initSwiperTraining = () => {
  const breakpoint = window.innerWidth;
  const reviewsSwiper = new Swiper(trainingSwiperContainer, {
    modules: [Navigation],
    speed: 900,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    lockClass: '.swiper__button--disabled',
    navigation: {
      nextEl: '.training__swiper-button-next',
      prevEl: '.training__swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
    allowTouchMove: breakpoint < 1439,
    on: {
      slideChange: () => {
        updateTrainingButtons();
      },
      reachEnd: () => {
        updateTrainingButtons();
      },
      reachBeginning: () => {
        updateTrainingButtons();
      }
    }
  });

  function updateTrainingButtons() {
    const prevButton = document.querySelector('.training__swiper-button-prev');
    const nextButton = document.querySelector('.training__swiper-button-next');

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
  updateTrainingButtons();
};

export { initSwiperTraining };
