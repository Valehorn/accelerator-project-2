import { Swiper } from 'swiper/bundle';
import 'swiper/scss';

const advSwiperContainer = document.querySelector('.adv__swiper');
let advSwiper = null;

const initAdvSwiper = () => {
  advSwiper = new Swiper(advSwiperContainer, {
    enabled: false,

    breakpoints: {
      1440: {
        slidesPerView: 3.2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        speed: 1900,
        loop: true,
        navigation: {
          nextEl: '.adv__swiper-button-next',
          prevEl: '.adv__swiper-button-prev',
        },
        enabled: true,
      }
    }
  });
};

const destroyAdvSwiper = () => {
  if (advSwiper) {
    advSwiper.destroy(true, true);
    advSwiper = null;
  }
};

const checkBreakpoint = () => {
  if (window.innerWidth >= 1440) {
    if (!advSwiper) {
      initAdvSwiper();
    }
  } else {
    destroyAdvSwiper();
  }
};

window.addEventListener('load', checkBreakpoint);
window.addEventListener('resize', checkBreakpoint);

export { initAdvSwiper };
