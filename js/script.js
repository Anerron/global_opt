const overlay = document.querySelector('.header__overlay'),
      hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__menu_mobile'),
      menuClose = document.querySelector('.header__menu__close');

hamburger.addEventListener('click', () => {
    overlay.classList.add('active');
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    overlay.classList.remove('active');
    menu.classList.remove('active');
});

function validateForms(form){
    $(form).validate({
        rules: {
        name: "required",
        phone: "required",
        email: {
            required: true,
            email: true
        }
        },
        messages: {
        name: "Пожалуйста, введите своё имя",
        phone: "Пожалуйста, введите номер телефона",
        email: {
            required: "Пожалуйста, введите почту",
            email: "Неправильно введён адрес почты"
        }
        }
    });
}

validateForms('#variants-form');

$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="imgs/reviews/previous.png" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="imgs/reviews/next.png" alt="arrow-right"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                centerPadding: '10px',
            }
        },
        {
            breakpoint: 567,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
  });
});