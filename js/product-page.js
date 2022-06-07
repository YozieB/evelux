$(document).ready(function () {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            margin: 27,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            navText: ['<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.31955 15.7328L9.05234 16.4132L10.4132 14.9477L9.68045 14.2672L8.31955 15.7328ZM2 8.5L1.31955 7.76721L0.530387 8.5L1.31955 9.23279L2 8.5ZM9.68045 2.73279L10.4132 2.05234L9.05234 0.586755L8.31955 1.26721L9.68045 2.73279ZM9.68045 14.2672L2.68045 7.76721L1.31955 9.23279L8.31955 15.7328L9.68045 14.2672ZM2.68045 9.23279L9.68045 2.73279L8.31955 1.26721L1.31955 7.76721L2.68045 9.23279Z" fill="#999999"/></svg>', '<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31955 14.2672L0.586755 14.9477L1.94766 16.4132L2.68045 15.7328L1.31955 14.2672ZM9 8.5L9.68045 9.23279L10.4696 8.5L9.68045 7.76721L9 8.5ZM2.68045 1.26721L1.94766 0.586755L0.586755 2.05234L1.31955 2.73279L2.68045 1.26721ZM2.68045 15.7328L9.68045 9.23279L8.31955 7.76721L1.31955 14.2672L2.68045 15.7328ZM9.68045 7.76721L2.68045 1.26721L1.31955 2.73279L8.31955 9.23279L9.68045 7.76721Z" fill="#999999"/></svg>'],
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });


    $('.goods__slider').owlCarousel({
        items: 4,
        loop: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        touchDrag: false,
        mouseDrag: false,
        dots: false,
        nav: true,
        margin: 32,
        navText: ['<svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9141 35.4085L19.6469 36.0889L21.0078 34.6233L20.275 33.9429L18.9141 35.4085ZM2 18.3378L1.31955 17.605L0.530387 18.3378L1.31955 19.0706L2 18.3378ZM20.275 2.73279L21.0078 2.05234L19.6469 0.586755L18.9141 1.26721L20.275 2.73279ZM20.275 33.9429L2.68045 17.605L1.31955 19.0706L18.9141 35.4085L20.275 33.9429ZM2.68045 19.0706L20.275 2.73279L18.9141 1.26721L1.31955 17.605L2.68045 19.0706Z" fill="#999999"/></svg>', '<svg width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.913299 33.9429L0.180505 34.6233L1.54141 36.0889L2.2742 35.4085L0.913299 33.9429ZM19.1883 18.3378L19.8688 19.0706L20.658 18.3378L19.8688 17.605L19.1883 18.3378ZM2.2742 1.26721L1.54141 0.586755L0.180505 2.05234L0.913299 2.73279L2.2742 1.26721ZM2.2742 35.4085L19.8688 19.0706L18.5079 17.605L0.913299 33.9429L2.2742 35.4085ZM19.8688 17.605L2.2742 1.26721L0.913299 2.73279L18.5079 19.0706L19.8688 17.605Z" fill="#999999"/></svg>'],
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            600: {
                items: 2,
                margin: 10,
            },
            950: {
                items: 3
            },
            1250: {
                items: 4
            }
        }
    })

    $('.goods__item-slider').owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.goods__item-sliderasd').owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.product__docs-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.9998L1.93934 9.9391L0.87868 10.9998L1.93934 12.0604L3 10.9998ZM13.0604 18.9389L4.06066 9.9391L1.93934 12.0604L10.9391 21.0602L13.0604 18.9389ZM4.06066 12.0604L13.0604 3.06066L10.9391 0.93934L1.93934 9.9391L4.06066 12.0604Z" fill="#202121"/></svg>', '<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.9998L12.0607 9.9391L13.1213 10.9998L12.0607 12.0604L11 10.9998ZM0.939584 18.9389L9.93934 9.9391L12.0607 12.0604L3.0609 21.0602L0.939584 18.9389ZM9.93934 12.0604L0.939584 3.06066L3.0609 0.93934L12.0607 9.9391L9.93934 12.0604Z" fill="#202121"/></svg>'],
    })

    $('.popup__cart-down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.popup__cart-up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


});


const tabs = document.getElementById('product__tabs');
const tab = document.querySelectorAll('.product__tab');
const content = document.querySelectorAll('.product__content');
const mobileToggleBtn = document.querySelector('.product__docs-toggle-btn');
const mobileText = document.querySelector('.product__docs-descr-mobile');
const notifyPopup = document.querySelector('.popup__notify');
const popup = document.querySelector('.popup');
const popupClose = document.querySelectorAll('.popup__close');
const reviewBtns = document.querySelectorAll('.product__content-reviews-btn');
const reviewPopup = document.querySelector('.popup__review');
const reviewPopupInner = document.querySelector('.popup__review-inner');
const notifyInput = document.querySelector('.popup__notify-input');
const notifyInputBtn = document.querySelector('.popup__notify-btn');
const notifyInner = document.querySelector('.popup__notify-inner');
const notifyFinal = document.querySelector('.popup__notify-final');
const notifyForm = document.querySelector('.notify__form');
const reviewInputBtn = document.querySelector('.popup__review-btn-submit');
const reviewFinal = document.querySelector('.popup__review-final');
const reviewForm = document.querySelector('.review__form');
const fastOrderForm = document.querySelector('.fast-order__form');
const fastOrderBtn = document.querySelector('.product__order-btn_fast');
const fastOrderInner = document.querySelector('.popup__fast-order-inner');
const fastOrderFinal = document.querySelector('.popup__fast-order-final');
const fastOrder = document.querySelector('.popup__fast-order');
const orderBtn = document.querySelectorAll('.order__btn');
const orderBtnContinue = document.querySelector('.popup__cart-continue');
const orderPopup = document.querySelector('.popup__cart');
const mobOrderMenu = document.querySelector('.c-mob-menu-order');
const orderMobileBtn = document.querySelector('.order__mobile');
const productColors = document.querySelectorAll('.product__spec-color');

productColors.forEach(element => {
    element.addEventListener('click', (e) => {
        const closestParent = e.target.closest('.product__spec-line');
        const childrenArr = Array.from(closestParent.children)
        childrenArr.forEach(element => {
            element.classList.remove('product__spec-color_active')
        })
        element.classList.add('product__spec-color_active')
    })
})

popupClose.forEach(element => {
    element.addEventListener('click', () => {
        popup.classList.remove('popup_opened');
        notifyPopup.classList.add('hidden');
        reviewPopup.classList.add('hidden');
        reviewFinal.classList.add('hidden');
        fastOrder.classList.add('hidden');
        orderPopup.classList.add('hidden');
    })
})

tab.forEach(el => {
    el.addEventListener('click', (e) => {
        const currentTab = e.target.dataset.btn;
        for (let i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('product__tab-active');
        }
        e.target.classList.add('product__tab-active');
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('product__content-active');
            if (content[i].dataset.content === currentTab) {
                content[i].classList.add('product__content-active');
            }
        }
    })
})

$('.c-mob-bg').click(function () {
    $('main').css('position', 'relative');
    $('.c-mob-bg').animate({
        opacity: "0",
        height: $(window).height() + "px"
    }, 500, function () {
        $('.c-mob-menu-order').hide();
    });
});

if ($(window).width() > 1000) {
    orderBtn.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('popup_opened');
            orderPopup.classList.remove('hidden');
        })
    })
} else {
    orderMobileBtn.addEventListener('click', () => {
        $('.c-mob-menu-order').show();
        $('.c-mob-bg').animate({
            opacity: "0.7",
            height: "136px"
        }, 500, function () {
            $('main').css('position', 'fixed');
        });
        $('.c-mob-items-inner').width($(window).width() - 28);
    })
    orderBtn.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            $('.c-mob-menu-order').show();
            $('.c-mob-bg').animate({
                opacity: "0.7",
                height: "136px"
            }, 500, function () {
                $('main').css('position', 'fixed');
            });
            $('.c-mob-items-inner').width($(window).width() - 28);
        })
    })
}


orderBtnContinue.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup_opened');
    orderPopup.classList.add('hidden');
})

notifyForm.addEventListener('submit', (e) => {
    e.preventDefault()
    notifyFinal.classList.remove('hidden')
    notifyInner.classList.add('hidden')
});

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault()
    reviewFinal.classList.remove('hidden')
    reviewPopupInner.classList.add('hidden')
});

fastOrderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fastOrderFinal.classList.remove('hidden');
    fastOrderInner.classList.add('hidden');
})

reviewBtns.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('popup_opened');
        reviewPopup.classList.remove('hidden');
        reviewPopupInner.classList.remove('hidden');
        reviewFinal.classList.add('hidden')
    })
})

const checkEnableButton = () => {
    notifyInputBtn.disabled = !(notifyInput.value !== 'Choose')
}

notifyInput.addEventListener('keypress', checkEnableButton)

fastOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup_opened')
    fastOrder.classList.remove('hidden');
    fastOrderInner.classList.remove('hidden');
    fastOrderFinal.classList.add('hidden');
})

mobileToggleBtn.addEventListener('click', () => {
    mobileText.classList.toggle('product__docs-descr-mobile')
    mobileToggleBtn.classList.toggle('product__docs-descr-mobile_active')
    if (mobileToggleBtn.classList.contains('product__docs-descr-mobile_active')) {
        mobileToggleBtn.textContent = 'Читать полностью'
    } else {
        mobileToggleBtn.textContent = 'Скрыть'
    }
})