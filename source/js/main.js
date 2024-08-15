import { burgerMenuToggle } from './burger-menu';
import { initSwiperHero } from './hero-swiper';
import { initSwiperTours } from './tours-swiper';
/* import { initSwiperTraining } from './training-swiper'; */

const bootStrap = () => {
  burgerMenuToggle();
  initSwiperHero();
  initSwiperTours();
  /* initSwiperTraining(); */
};

bootStrap();
