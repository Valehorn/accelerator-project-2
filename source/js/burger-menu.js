import { isEscapeKey } from './utils';

const body = document.querySelector('.page-body');
const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__button-burger-menu');
const navList = document.querySelector('.header__nav-list');

const openMenu = () => {
  body.classList.add('page-body--menu-open');
  nav.classList.add('header__nav--open');
  document.addEventListener('keydown', onDocumentKeyDown);
  navList.style.maxHeight = `${navList.scrollHeight}px`;
};

const closeMenu = () => {
  body.classList.remove('page-body--menu-open');
  nav.classList.remove('header__nav--open');
  document.removeEventListener('keydown', onDocumentKeyDown);
  navList.style.maxHeight = '0';
};

const toggleMenu = () => {
  const isMenuOpen = body.classList.contains('page-body--menu-open') && nav.classList.contains('header__nav--open');
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onBurgerButtonClick = () => {
  toggleMenu();
};

function onDocumentKeyDown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

navList.addEventListener('click', (evt) => {
  const navListItem = evt.target.closest('.header__nav-item');
  if (!navListItem) {
    return;
  }
  closeMenu();
});

const burgerMenuToggle = () => {
  burgerButton.addEventListener('click', onBurgerButtonClick);
};

export {burgerMenuToggle};
