// ---- MENÚ HAMBURGUESA ----
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
}

// Cierra el menú al pulsar un enlace (móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.remove('open');
    });
});

// ---- SELECTOR DE IDIOMA ----
// El script se carga al final del <body>, así que el DOM ya está listo.
// NO usamos DOMContentLoaded para evitar que el evento se pierda.
(function initLang() {
    const lang    = document.body.dataset.lang    || 'es';
    const altHref = document.body.dataset.altHref || null;

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
            btn.removeAttribute('href');
        } else if (altHref) {
            btn.href = altHref;
        } else {
            btn.style.opacity      = '0.4';
            btn.style.pointerEvents = 'none';
            btn.removeAttribute('href');
        }
    });
}());
