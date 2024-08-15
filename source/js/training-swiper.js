import { Swiper } from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const trainingSwiperContainer = document.querySelector('.training__swiper');

const initSwiperTraining = () => {
  const breakpoint = window.innerWidth;

  // Инициализация Swiper
  const trainingSwiper = new Swiper(trainingSwiperContainer, {
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
      init(swiper) {
        // Логика выполняется после полной инициализации Swiper
        if (breakpoint < 768) {
          swiper.slideTo(2, 0);
        }
        updateTrainingButtons(swiper);
      },
      slideChange(swiper) {
        updateTrainingButtons(swiper);
      },
      reachEnd(swiper) {
        updateTrainingButtons(swiper);
      },
      reachBeginning(swiper) {
        updateTrainingButtons(swiper);
      },
    }
  });

  // Функция для обновления состояния кнопок
  function updateTrainingButtons(swiperInstance) {
    const prevButton = document.querySelector('.training__swiper-button-prev');
    const nextButton = document.querySelector('.training__swiper-button-next');

    if (!swiperInstance || !prevButton || !nextButton) return;

    if (swiperInstance.isBeginning) {
      prevButton.classList.add('swiper__buttons--disabled');
      prevButton.disabled = true;
      swiperInstance.allowSlidePrev = false;
    } else {
      prevButton.classList.remove('swiper__buttons--disabled');
      prevButton.disabled = false;
      swiperInstance.allowSlidePrev = true;
    }

    if (swiperInstance.isEnd) {
      nextButton.classList.add('swiper__buttons--disabled');
      nextButton.disabled = true;
      swiperInstance.allowSlideNext = false;
    } else {
      nextButton.classList.remove('swiper__buttons--disabled');
      nextButton.disabled = false;
      swiperInstance.allowSlideNext = true;
    }
  }
};

export { initSwiperTraining };
