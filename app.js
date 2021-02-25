

// parallax effect

window.addEventListener('scroll', function() {
    const parallax_margella = document.querySelector('.parallax_1');
    let scrollPosition = window.pageYOffset;

    parallax_margella.style.transform = 'translateX(' + scrollPosition / 1.2 + 'px)';



});

window.addEventListener('scroll', function() {
    const parallax_prada = document.querySelector('.parallax_2');
    let scrollPosition = window.pageYOffset;

    parallax_prada.style.transform = 'translateX(' + scrollPosition / -1.2 + 'px)';



});