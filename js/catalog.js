const menuTitleBtn = document.querySelectorAll('.catalog-main__menu-title');
const menuFilterBtn = document.querySelectorAll('.catalog-side__title')
const topFilterBtn = document.querySelectorAll('.catalog-top-filter__toggle-btn');
const catalogView = Array.from(document.querySelectorAll('.catalog-main__view'));
const catalogViewBtn = Array.from(document.querySelectorAll('.catalog-top-filter__view-item'));
const pagHiddenBtn = document.querySelectorAll('.catalog-main__pagination-item_show');
const pagDots = document.querySelector('.catalog-main__pagination-item-dots');
const pagBtn = document.querySelectorAll('.catalog-main__pagination-item_btn');
const pagContainer = document.querySelector('.catalog-main__pagination');
const filterMobileBtn = document.querySelector('.catalog-top-filter__name_mobile');

AOS.init({
    offset: -580
});

// PRICE RANGE
let priceRanges = document.querySelectorAll('.js-price-range');

priceRanges.forEach(el => {
    let downPriceInput = el.closest('.filter-price').querySelector('.js-price-down'),
        upPriceInput = el.closest('.filter-price').querySelector('.js-price-up'),
        inputs = [downPriceInput, upPriceInput];


    //get maxPrice for slider price
    const maxPrice = +upPriceInput.getAttribute('data-max');
    const minPrice = +downPriceInput.getAttribute('data-min');
    upPriceInput.value = maxPrice.toLocaleString();

    //Init price range slider
    noUiSlider.create(el, {
        range: {
            'min': minPrice,
            'max': maxPrice
        },

        behaviour: 'drag',
        connect: true,
        start: [0, maxPrice],
        step: 1
    });


    //Update value after scroll pointer in slider
    el.noUiSlider.on('update', values => {
        let [downPrice, upPrice] = values;

        downPrice = Number(downPrice).toLocaleString();
        upPrice = Number(upPrice).toLocaleString();

        downPriceInput.value = downPrice;
        upPriceInput.value = upPrice;
    });

    //Change slider value after inputs change
    inputs.forEach(function (input, handle) {
        input.addEventListener('change', function () {
            let value = this.value;
            value = value.replace(/\s+/g, '');
            value = parseInt(value);

            el.noUiSlider.setHandle(handle, value);
        });
    });

});



topFilterBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        const closestParent = e.target.closest('.catalog-top-filter__toggle');
        const childrenArr = Array.from(closestParent.children)
        childrenArr.forEach(element => {
            element.classList.remove('catalog-top-filter__toggle-btn_active')
        })
        element.classList.add('catalog-top-filter__toggle-btn_active')
    })
})


menuTitleBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('catalog-main__menu-content_active');
        e.target.classList.toggle('catalog-side__title_active')
    })
})


catalogViewBtn[0].addEventListener('click', () => {
    catalogViewBtn[0].classList.add('catalog-top-filter__view-item_active');
    catalogViewBtn[1].classList.remove('catalog-top-filter__view-item_active');
    catalogView[0].classList.add('catalog-main__view_active');
    catalogView[1].classList.remove('catalog-main__view_active');
})

catalogViewBtn[1].addEventListener('click', () => {
    catalogViewBtn[1].classList.add('catalog-top-filter__view-item_active');
    catalogViewBtn[0].classList.remove('catalog-top-filter__view-item_active');
    catalogView[1].classList.add('catalog-main__view_active');
    catalogView[0].classList.remove('catalog-main__view_active');
})



window.addEventListener('resize', function (event) {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    if (newWidth <= 1000) {
        catalogView[0].classList.add('catalog-main__view_active');
        catalogViewBtn[0].classList.add('catalog-top-filter__view-item_active');
        catalogView[1].classList.remove('catalog-main__view_active');
        catalogViewBtn[1].classList.remove('catalog-top-filter__view-item_active');
        pagContainer.classList.add('catalog-main__pagination_mobile')
    }
});


$('.c-mob-bg').click(function () {
    $('main').css('position', 'relative');
    $('.c-mob-bg').animate({
        opacity: "0",
        height: $(window).height() + "px"
    }, 500, function () {
        $('.c-mob-menu-filter').hide();
    });
});

filterMobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    $('.c-mob-menu-filter').show();
    $('.c-mob-bg').animate({
        opacity: "0.7",
        height: "136px"
    }, 500, function () {
        $('main').css('position', 'fixed');
    });
    $('.c-mob-items-inner').width($(window).width() - 28);
})

pagBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const closestParent = e.target.closest('.catalog-main__pagination');
        const childrenArr = Array.from(closestParent.children)
        childrenArr.forEach(el => {
            el.classList.remove('catalog-main__pagination-item_active')
        })
        e.target.classList.add('catalog-main__pagination-item_active')
    })
})

pagDots.addEventListener('click', (e) => {
    e.preventDefault()
    pagHiddenBtn.forEach(element => {
        element.classList.remove('catalog-main__pagination-item_hidden')
    })
    pagDots.classList.add('catalog-main__pagination-item_hidden')
})


jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});