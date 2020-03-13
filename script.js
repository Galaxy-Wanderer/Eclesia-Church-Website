const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    links.classList.toggle('links-active');
});