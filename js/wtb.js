function checkParams() {
    const wtbInput = document.querySelector('.wtb__search-input').value
    const wtbBtn = document.querySelector('.wtb__search-btn');
    if (wtbInput.length != 0) {
        wtbBtn.classList.add('wtb__search-btn_active')
    } else {
        wtbBtn.classList.remove('wtb__search-btn_active')
    }
}