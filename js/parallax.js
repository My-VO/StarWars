const parallaxHeader = document.querySelector('.header');

window.addEventListener('scroll', () => {
    parallaxHeader.style.backgroundPositionY = -window.scrollY / 0.8 + "px";
})

const parallaxLogo = document.querySelector('#img-header');

window.addEventListener('scroll', () => {
    parallaxLogo.style.transform = `translateY(-${window.pageYOffset / 5}px)`;
})

