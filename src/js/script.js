const overlay = document.querySelector('.header__overlay'),
      hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__menu_mobile'),
      menuClose = document.querySelector('.header__menu__close'),
      modalButtons = document.querySelectorAll('.open__modal'),
      modalWindow = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close'),
      modalForm = document.querySelector('#modal-form'),
      modalChecked = document.querySelector('.modal__checked');
      modalCheckedClose = document.querySelector('.modal__checked__close');

modalButtons.forEach(function(item, i) {
    modalButtons[i].addEventListener('click', function (event) {
        overlay.classList.add('active');
        modalWindow.classList.add('modal_active');
        modalClose.addEventListener('click', function() {
            overlay.classList.remove('active');
            modalWindow.classList.remove('modal_active');
        });
        modalForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (modalForm.checkValidity()) {
                modalWindow.classList.remove('modal_active');
                modalChecked.classList.add('modal__checked_active');
                modalCheckedClose.addEventListener('click', function () {
                    overlay.classList.remove('active');
                    modalChecked.classList.remove('modal__checked_active'); //comment
                });
            };
        });
    });
});


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
        text: "required",
        email: {
            required: true,
            email: true
        }
        },
        messages: {
        name: "Пожалуйста, введите своё имя",
        phone: "Пожалуйста, введите номер телефона",
        text: "Пожалуйста, введите сообщение",
        email: {
            required: "Пожалуйста, введите почту",
            email: "Неправильно введён адрес почты"
        }
        }
    });
}

validateForms('#variants-form');
validateForms('#questions-form');
validateForms('#modal-form');

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