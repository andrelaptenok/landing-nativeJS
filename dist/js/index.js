'use strict';

const btnBurger = document.querySelector('.wrapper-hamburger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const btnReturn = document.querySelector('.btn-return');
const menu = document.querySelectorAll('.link');
const header = document.querySelector('.navbar-container');
const about = document.getElementById('about');
const pricing = document.getElementById('pricing');
const contact = document.getElementById('contact');

//menu hamburger

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

//nav openMenu

menu.forEach((el) => {
    el.addEventListener('click', () => {
        menu.forEach((el) => {
            el.classList.remove('link-active');
        });
        el.classList.add('link-active');
    });
});

window.onscroll = function showScroll() {
    const aboutOff = about.offsetTop;
    const pricingOff = pricing.offsetTop;
    const reviewsOff = about.offsetTop;
    if (window.pageYOffset > 700) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
    if (window.pageYOffset > aboutOff + pricingOff + reviewsOff - 1100) {
        menu.forEach((element) => {
            element.classList.remove('link-active');
        });
        menu[4].classList.add('link-active');
    } else if (window.pageYOffset > aboutOff + pricingOff - 600) {
        menu.forEach((element) => {
            element.classList.remove('link-active');
        });
        menu[3].classList.add('link-active');
    } else if (window.pageYOffset > pricingOff - 95) {
        menu.forEach((element) => {
            element.classList.remove('link-active');
        });
        menu[2].classList.add('link-active');
    } else if (window.pageYOffset > aboutOff - 105) {
        menu.forEach((element) => {
            element.classList.remove('link-active');
        });
        menu[1].classList.add('link-active');
    } else {
        menu.forEach((element) => {
            element.classList.remove('link-active');
        });
        menu[0].classList.add('link-active');
    }
};
//Form signap blocks

let nameSignap = document.getElementById('name-signap');
let emailSignap = document.getElementById('email-signap');
const passwordSignap = document.getElementById('password-signap');

passwordSignap.addEventListener('click', (e) => {
    e.preventDefault();
    nameSignap.value = '';
    emailSignap.value = '';
});

//Form contact block

let nameInput = document.getElementById('name-input');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
const submit = document.getElementById('submit');
let areaText = document.getElementById('area-text');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameInput.value !== '' && email.value !== '') {
        confirm('Спасибо за Ваш отклик! Наш специалист в скором времени с вами свяжется.');
    }
    nameInput.value = '';
    email.value = '';
    subject.value = '';
    areaText.value = '';
});

//Preloader

window.onload = function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
};

//webp

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});