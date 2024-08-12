import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSwiperContainer = document.querySelector('.hero__swiper');

const heroSwiperInit = () => {
  const heroSwiper = new Swiper(heroSwiperContainer, {
    modules: [Pagination],
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.hero__pagination',
      clickable: false,
      bulletElement: 'button type="button"',
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
        pagination: {
          clickable: true,
        }
      },
    }
  });

  heroSwiper.on('init', () => {
    updateTabIndex(heroSwiper);
  });

  heroSwiper.on('slideChange', () => {
    updateTabIndex(heroSwiper);
  });

  function updateTabIndex(swiperSlide) {
    const slides = swiperSlide.slides;
    const activeIndex = swiperSlide.activeIndex;

    slides.forEach((slide, index) => {
      const slideButtons = slide.querySelectorAll('button');
      if (index === activeIndex) {
        slideButtons.forEach((button) => {
          button.removeAttribute('tabindex');
        });
      } else {
        slideButtons.forEach((button) => {
          button.setAttribute('tabindex', '-1');
        });
      }
    });
  }
  heroSwiper.init();
};

export { heroSwiperInit };
