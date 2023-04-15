// toggle the hamburger icon
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})