const tab = document.querySelectorAll('.promo__tab');
const tabs = document.getElementById('product__tabs');
const content = document.querySelectorAll('.product__content');

tab.forEach(el => {
    el.addEventListener('click', (e) => {
        const currentTab = e.target.dataset.btn;
        for (let i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('promo__tab-active');
        }
        e.target.classList.add('promo__tab-active');
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('product__content-active');
            if (content[i].dataset.content === currentTab) {
                content[i].classList.add('product__content-active');
            }
        }
    })
})