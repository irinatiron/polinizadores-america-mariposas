import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import navLogo from '../assets/images/nav-logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cerrar menú cuando se hace clic en un enlace
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/*Logo */}
                <Link to="/" className="nav-logo">
                    <img src={navLogo} alt="blue butterfly with america map on the left side" />
                </Link>
                {/*Title*/}
                <Link to="/" className="nav-title">
                    <h2>Mariposas de América</h2>
                </Link>

                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>

                {/*Nav Links*/}
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li style={{'--i': 0.42}}>
                        <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li style={{'--i': 0.42}}>
                        <Link to="/fichas-mariposas" className="nav-link" onClick={closeMenu}>Fichas Mariposas</Link>
                    </li>
                    <li style={{'--i': 0.42}}>
                        <Link to="/creadoras" className="nav-link" onClick={closeMenu}>Creadoras</Link>
                    </li>
                     <li style={{'--i': 0.42}}>
                        <Link to="/formulario" className="nav-link" onClick={closeMenu}>Formulario</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;