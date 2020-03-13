// Burger animation
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    links.classList.toggle('links-active');
});

// Slideshow animation
const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
}
next.addEventListener('click', () => {
    nextSlide();
})
prev.addEventListener('click', () => {
    prevSlide();
})