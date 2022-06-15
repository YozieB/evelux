const favBtns = document.querySelectorAll('.catalog-top-filter__view-item');
const favWrapper = document.querySelectorAll('.popup__cart-goods-wrapper');
const favWide = document.querySelectorAll('.fav__wrapper-wide');
console.log(favWide)

favBtns[0].addEventListener('click', () => {
    favBtns[0].classList.add('catalog-top-filter__view-item_active');
    favBtns[1].classList.remove('catalog-top-filter__view-item_active');
    favWrapper.forEach(el => {
        el.classList.add('catalog-main__view_active')
    })
    favWide.forEach(el => {
        el.classList.remove('catalog-main__view_active');
    })
})

favBtns[1].addEventListener('click', () => {
    favBtns[1].classList.add('catalog-top-filter__view-item_active');
    favBtns[0].classList.remove('catalog-top-filter__view-item_active');
    favWide.forEach(el => {
        el.classList.add('catalog-main__view_active');
    })
    favWrapper.forEach(el => {
        el.classList.remove('catalog-main__view_active')
    })
})

window.addEventListener('resize', function (event) {
    let newWidth = window.innerWidth;
    if (newWidth <= 1000) {
        favWrapper.forEach(el => {
            el.classList.add('catalog-main__view_active');
        })
        favBtns[0].classList.add('catalog-top-filter__view-item_active');
        favWide.forEach(el => {
            el.classList.remove('catalog-main__view_active');
        })
        favBtns[1].classList.remove('catalog-top-filter__view-item_active');
    }
});