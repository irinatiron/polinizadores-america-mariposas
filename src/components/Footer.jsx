import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" data-testid="main-footer">
            <div className="footer-content">
                <h2 className="footer-logo">Mariposas de América</h2>

                <hr className="footer-divider" />

                <p className="footer-text">
                    Proyecto desarrollado como forma colaborativa por Irina Tirón, Carmen Tajuelo, Guissella Pérez, Ingrid Martínez y Paloma Gómez dentro del marco de formación del Bootcamp de Desarrollo Web Fullstack de Factoría F5 en Julio de 2025. <br /><br />
                    Hecho con mucho cariño, 💙 y pasión por la tecnología y la naturaleza.
                </p>

                <a
                    href="https://factoriaf5.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-brand"
                    aria-label="Visitar sitio web de Factoría F5"
                >
                    <img
                        src="src\assets\images\logo-factoriaf5.png"
                        alt="Logo de Factoría F5"
                        className="h-8"
                    />
                </a>

                <div className="footer-copyright">
                    <p>&copy; {currentYear} Mariposas de América. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;