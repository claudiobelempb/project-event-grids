const nav = document.querySelector('.header__nav--links');
const burger = document.querySelector('.header__nav--hamburger');
const burgerFirstLine = document.querySelector('.line-1');
const burgerSecondLine = document.querySelector('.line-2');

burger.addEventListener('click', () => {
  burgerFirstLine.classList.toggle('line-1-toggled');
  burgerSecondLine.classList.toggle('line-2-toggled');

  nav.classList.toggle('display-nav');
})