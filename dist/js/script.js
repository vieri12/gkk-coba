//hamburger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
    hamburger.classList.toggle('pr-2');
    hamburger.classList.toggle('pr-');
});

//navbar
window.onscroll = function () {
    const header = document.querySelector('header');

    const fixednav = header.offsetTop;
    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};
//artikel

const artikel = document.querySelector('#artikel');
const artikeladd = document.querySelector('#artikeladd1');
const artikeladd2 = document.querySelector('#artikeladd2');
const artikeladd3 = document.querySelector('#artikeladd3');
const arrowheader = document.querySelector('#arrowheader');
artikel.addEventListener('click', function () {
    artikeladd1.classList.toggle('hidden');
    artikeladd2.classList.toggle('hidden'); 
    artikeladd3.classList.toggle('hidden');
    artikeladd1.classList.toggle('block');
    artikeladd2.classList.toggle('block');
    artikeladd3.classList.toggle('block');
    arrowheader.classList.toggle('rotate-180');
}); 
