import { burgerMenuToggle } from './burger-menu';
import { initSwiperHero } from './hero-swiper';
import { initSwiperTours } from './tours-swiper';

const bootStrap = () => {
  burgerMenuToggle();
  initSwiperHero();
  initSwiperTours();
};

bootStrap();
