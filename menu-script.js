'use strict';

let brandDark = document.querySelector('.brandDark');
let headerBars = document.querySelector('.header__menu');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);