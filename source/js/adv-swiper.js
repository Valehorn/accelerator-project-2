import { Swiper } from 'swiper/bundle';
import 'swiper/scss';

const advSwiperContainer = document.querySelector('.adv__swiper');

const initAdvSwiper = () => {
  new Swiper(advSwiperContainer, {
    slidesPerView: 1,
    sliderPerGroup: 2,
    spaceBetween: 10,
    speed: 900,
    loop: true,
    navigation: {
      nextEl: '.adv__swiper-button-next',
      prevEl: '.adv__swiper-button-prev',
    },
    enabled: false,

    breakpoints: {
      1440: {
        enabled: true,
      }
    }
  });
};

export { initAdvSwiper };
