import { burgerMenuToggle } from './burger-menu';
import { initSwiperHero } from './hero-swiper';
import { initSwiperTours } from './tours-swiper';
import { initSwiperTraining } from './training-swiper';
import { initSwiperReviews } from './reviews-swiper';
import { initAdvSwiper } from './adv-swiper';

const bootStrap = () => {
  burgerMenuToggle();
  initSwiperHero();
  initSwiperTours();
  initSwiperTraining();
  initSwiperReviews();
  initAdvSwiper();
};

bootStrap();
