const overlay = document.querySelector('.header__overlay')
        hamburger = document.querySelector('.header__hamburger')
        menu = document.querySelector('.header__menu_mobile')
        menuClose = document.querySelector('.header__menu__close');


hamburger.addEventListener('click', () => {
    overlay.classList.add('active');
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    overlay.classList.remove('active');
    menu.classList.remove('active');
});