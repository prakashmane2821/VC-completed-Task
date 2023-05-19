const welcomeElement = document.getElementById('welcome');
const backToTopElement = document.getElementById('back-to-top');

welcomeElement.addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

backToTopElement.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    const servicesSection = document.getElementById('services');
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= servicesSection.offsetTop - 30) {
        backToTopElement.style.display = 'flex';
        welcomeElement.style.display = 'none';
    } else {
        backToTopElement.style.display = 'none';
        welcomeElement.style.display = 'flex';
    }
});