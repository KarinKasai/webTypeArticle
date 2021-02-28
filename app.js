
// nav bar scroll effect


window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    navbar.classList.toggle('scrolling-active', windowPosition);
})








// parallax effect

window.addEventListener('scroll', function() {
    const parallax_margella = document.querySelector('.parallax_1');
    let scrollPosition = window.pageYOffset;

    parallax_margella.style.transform = 'translateX(' + scrollPosition / 1.1 + 'px)';



});

window.addEventListener('scroll', function() {
    const parallax_prada = document.querySelector('.parallax_2');
    let scrollPosition = window.pageYOffset;

    parallax_prada.style.transform = 'translateX(' + scrollPosition / -1.1 + 'px)';



});