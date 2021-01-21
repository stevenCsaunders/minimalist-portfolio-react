const open = document.querySelector('.top-nav #open');
const close = document.querySelector('.top-nav #close')
const menu = document.querySelector('.top-nav ul');

const toggleHamburger = () => {
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    menu.classList.toggle('show');
}

open.addEventListener('click', toggleHamburger);
close.addEventListener('click', toggleHamburger);


