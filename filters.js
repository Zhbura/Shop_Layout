"use strict";

const filterSizeEl = document.querySelector('.size');
const menuSizeEl = document.querySelector('.size__menu');

filterSizeEl.addEventListener('click', () => {
    menuSizeEl.classList.toggle('hidden');
});

const headingFilterEls = document.querySelectorAll('.filters__heading');
const filterLabelEl = document.querySelector('.filters__label');
const filterPopUpEl = document.querySelector('.filters__pop-up');
const filterIcon = document.querySelector('.filters__icon');

filterLabelEl.addEventListener('click', () => {
    filterPopUpEl.classList.toggle('hidden');
    filterLabelEl.classList.toggle('filters__label_pink');
    filterIcon.classList.toggle('filters__icon_pink');
    filterIcon.classList.toggle('filters__icon');

    if (filterIcon.getAttribute('src') === 'images/catalog/filter.svg') {
        filterIcon.setAttribute('src', 'images/catalog/filter_pink.svg')
    } else {
        filterIcon.setAttribute('src', 'images/catalog/filter.svg')
    }
});

headingFilterEls.forEach(function (header) {
    header.addEventListener('click', event => {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});