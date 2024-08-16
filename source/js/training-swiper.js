import { Swiper } from 'swiper/bundle';
import 'swiper/scss';

const trainingSwiperContainer = document.querySelector('.training__swiper');

const initSwiperTraining = () => {
  const swiperTraining = new Swiper(trainingSwiperContainer, {
    navigation: {
      nextEl: '.training__swiper-button-next',
      prevEl: '.training__swiper-button-prev',
    },
    speed: 900,
    loop: false,
    slidesPerView: 1,
    allowTouchMove: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
        spaceBetween: 15,
      },

      768: {
        slidesPerView: 2,
        initialSlide: 0,
        spaceBetween: 18,
      },

      1440: {
        slidesPerView: 3,
        initialSlide: 0,
        spaceBetween: 30,
        allowTouchMove: false
      }
    },
    on: {
      slideChange() {
        updateNavigationButtons(swiperTraining);
      },
      slideNextTransitionStart() {
        updateNavigationButtons(swiperTraining);
      }
    }
  });
  updateNavigationButtons(swiperTraining);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.training__swiper-button-prev');
    const nextButton = document.querySelector('.training__swiper-button-next');

    if (swiper.isBeginning) {
      prevButton.classList.add('swiper__button--disabled');
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove('swiper__button--disabled');
      prevButton.disabled = false;
    }

    if (swiper.isEnd) {
      nextButton.classList.add('swiper__button--disabled');
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove('swiper__button--disabled');
      nextButton.disabled = false;
    }
  }
};

export { initSwiperTraining };
