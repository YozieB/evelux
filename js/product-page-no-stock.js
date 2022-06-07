const notifyBtnMobile = document.querySelector('.product__order-btn_notify-mob');
const notifyBtn = document.querySelector('.product__order-btn_notify');

notifyBtnMobile.addEventListener('click', (e) => {
    console.log(1)
    e.preventDefault();
    notifyFinal.classList.add('hidden');
    notifyInner.classList.remove('hidden');
    popup.classList.add('popup_opened');
    notifyInputBtn.disabled = true;
    notifyPopup.classList.remove('hidden')
})

notifyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    notifyFinal.classList.add('hidden');
    notifyInner.classList.remove('hidden');
    popup.classList.add('popup_opened');
    notifyInputBtn.disabled = true;
    notifyPopup.classList.remove('hidden')
})