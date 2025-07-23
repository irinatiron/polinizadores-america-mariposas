import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogo from '../assets/images/nav-logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/*Logo */}
                <Link to="/" className="nav-logo">
                    <img src={navLogo} alt="blue butterfly with america map on the left side" />
                </Link>
                {/*Title*/}
                <Link to="/" className="nav-title">
                    <p>Mariposas de América</p>
                </Link>
                {/*Nav Links*/}
                <ul className="nav-menu">
                    <li>
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/fichas-mariposas" className="nav-link">Fichas Mariposas</Link>
                    </li>
                    <li>
                        <Link to="/creadoras" className="nav-link">Creadoras</Link>
                    </li>
                     <li>
                        <Link to="/formulario" className="nav-link">Formulario</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}
export default Navbar;