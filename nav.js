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
