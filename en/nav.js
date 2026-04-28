function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links')?.classList.remove('open');
        });
    });
    const lang    = document.body.dataset.lang    || 'es';
    const altHref = document.body.dataset.altHref || null;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
            btn.removeAttribute('href');
        } else if (altHref) {
            btn.href = altHref;
        } else {
            btn.style.opacity = '0.4';
            btn.style.pointerEvents = 'none';
            btn.removeAttribute('href');
        }
    });
});
