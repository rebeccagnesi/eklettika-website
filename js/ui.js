const navToggleBtn = document.querySelector('.hb');
const header = document.querySelector('header');
navToggleBtn.addEventListener('click', () => {
    header.classList.toggle('active');
})