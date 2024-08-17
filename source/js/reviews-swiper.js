import { Swiper } from 'swiper/bundle';
import 'swiper/scss';

const reviewsSwiperContainer = document.querySelector('.reviews__swiper');

const initSwiperReviews = () => {
  const swiperReviews = new Swiper(reviewsSwiperContainer, {
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
    speed: 900,
    loop: false,
    slidesPerView: 1,
    allowTouchMove: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false
      }
    },
    on: {
      slideChange() {
        updateNavigationButtons(swiperReviews);
      },
      slideNextTransitionStart() {
        updateNavigationButtons(swiperReviews);
      }
    }
  });
  updateNavigationButtons(swiperReviews);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.reviews__swiper-button-prev');
    const nextButton = document.querySelector('.reviews__swiper-button-next');

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

export { initSwiperReviews };
