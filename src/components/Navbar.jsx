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
                    <p style="border: 3px dotted red">Mariposas de América</p>
                </Link>
                {/*Nav Links*/}
                <ul className="nav-menu" style="border: 3px dotted red">
                    <li>
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/butterflies" className="nav-link">Fichas Mariposas</Link>
                    </li>
                    <li>
                        <Link to="/creators" className="nav-link">Creadoras</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}
export default Navbar;