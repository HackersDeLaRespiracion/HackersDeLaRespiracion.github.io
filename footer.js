function renderFooter() {
  const footerContainer = document.getElementById("footer-container");
  if (!footerContainer) return;

  const currentYear = new Date().getFullYear();

  footerContainer.innerHTML = `
    <footer>
      <div class="container footer-content-grid">
        <div class="footer-col brand-col">
          <h3>Hackers de la Respiración</h3>
          <p class="footer-tagline">Ingeniería del bienestar, regulación del estrés y foco mental a través de la neurofisiología aplicada.</p>
          <p class="copyright">&copy; ${currentYear} Hackers de la Respiración. Todos los derechos reservados.</p>
        </div>

        <div class="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><a href="index.html#inicio">Inicio</a></li>
            <li><a href="index.html#metodo">El Método (60 min)</a></li>
            <li><a href="ciencia.html">Evidencia Científica</a></li>
            <li><a href="index.html#servicios">Programas & Empresas</a></li>
            <li><a href="experiencias.html">Experiencias & Testimonios</a></li>
            <li><a href="contacto.html">Contacto & Solicitudes</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal & Mapa</h4>
          <ul>
            <li><a href="aviso-legal.html">Aviso Legal</a></li>
            <li><a href="privacidad.html">Política de Privacidad</a></li>
            <li><a href="cookies.html">Política de Cookies</a></li>
            <li><a href="mapa.html">Mapa del Sitio (Sitemap)</a></li>
            <li><a href="https://amzn.to/4cwTSJZ" target="_blank" rel="noopener">Libro en Amazon ↗</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}

// Ejecución segura sin importar el momento de carga
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderFooter);
} else {
  renderFooter();
}
