let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

};

const scrollreveal = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

scrollreveal.reveal('.text', {delay:200, origin:'top'});
scrollreveal.reveal('.logo-img', {delay:450, origin:'top'});
scrollreveal.reveal('.platform-img', {delay:450, origin:'top'});
scrollreveal.reveal('.about-img', {delay:450, origin:'top'});
scrollreveal.reveal('.innovation-img', {delay:450, origin:'top'});
scrollreveal.reveal('.contact-img', {delay:450, origin:'top'});
scrollreveal.reveal('.copyright-img', {delay:450, origin:'top'});
scrollreveal.reveal('.icons', {delay:500, origin:'left'});
scrollreveal.reveal('.scroll-down', {delay:500, origin:'right'});
