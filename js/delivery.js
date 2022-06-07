const deliveryBtn = document.querySelector('.delivery__choose-btn_delivery');
const delvieryPriceBtn = document.querySelector('.delivery__choose-btn_price');
const deliveryInfo = document.querySelector('.delivery__main');
const deliveryPrice = document.querySelector('.delivery__price');


deliveryBtn.addEventListener('click', (e) => {
    e.preventDefault()
    deliveryBtn.classList.add('delivery__choose-btn_active');
    deliveryInfo.classList.add('delivery_active');
    deliveryPrice.classList.remove('delivery_active');
    delvieryPriceBtn.classList.remove('delivery__choose-btn_active');
})

delvieryPriceBtn.addEventListener('click', (e) => {
    e.preventDefault()
    deliveryBtn.classList.remove('delivery__choose-btn_active');
    deliveryInfo.classList.remove('delivery_active');
    deliveryPrice.classList.add('delivery_active');
    delvieryPriceBtn.classList.add('delivery__choose-btn_active')
})