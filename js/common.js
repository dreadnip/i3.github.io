const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', (event) => {

    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', 'true');
    event.preventDefault();
});