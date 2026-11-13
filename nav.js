// Generador y gestor de navegación dinámica
document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("nav-container");

  if (!navContainer) return;

  navContainer.innerHTML = `
    <header>
      <div class="container nav-grid">
        <a href="index.html#inicio" class="logo">David García-Pozuelo</a>
        <nav>
          <ul class="nav-links">
            <li><a href="index.html#sobre-mi">Sobre mí</a></li>
            <li><a href="index.html#metodo">El Método</a></li>
            <li><a href="ciencia.html">Ciencia</a></li>
            <li><a href="index.html#servicios">Programas</a></li>
            <li><a href="experiencias.html">Experiencias</a></li>
            <li><a href="contacto.html" class="btn-nav-highlight">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
});
