// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(anchor.getAttribute('href'));
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        });
    });
});
