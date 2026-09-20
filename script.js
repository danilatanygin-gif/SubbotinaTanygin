const burgerBtn = document.getElementById('burger_but');
const burgerMen = document.getElementById('burger');
burgerBtn.addEventListener('click', () => {
    burgerMen.classList.toggle('visible');
});

const burgerCross = document.getElementById('burger_cross');
burgerCross.addEventListener('click', () => {
    burgerMen.classList.remove('visible');
});




const authBtn = document.getElementById('auth_button');
const authForm = document.getElementById('auth_form');
authBtn.addEventListener('click', () => {
    authForm.classList.toggle('visible');
});

const authCross = document.getElementById('auth_cross');
authCross.addEventListener('click', () => {
    authForm.classList.remove('visible');
});