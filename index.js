'use strict';

const btnBurger = document.querySelector('.wrapper-hamburger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

const openMenu = () => {
    catalog.classList.toggle('open');
    overlay.classList.toggle('active');
    btnBurger.classList.toggle('wrapper-hamburger');
};

const closeMenu = () => {
    catalog.classList.toggle('open');
    overlay.classList.toggle('active');
    btnBurger.classList.toggle('wrapper-hamburger');
};

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeMenu();
    }
});