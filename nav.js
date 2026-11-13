// Generador y gestor de navegación dinámica
document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("nav-container");

  if (!navContainer) return;

  navContainer.innerHTML = `
    <header>
      <div class="container nav-grid">
        <a href="#inicio" class="logo">David García-Pozuelo</a>
        <nav>
          <ul class="nav-links">
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#metodo">El Método</a></li>
            <li><a href="#servicios">Programas & Empresas</a></li>
            <li><a href="#guia">Guía Gratuita</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
});
