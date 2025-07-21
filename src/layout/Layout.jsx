import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Outlet/>
    <footer style={{
      padding: '2rem',
      backgroundColor: '#34495e',
      color: 'white',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/new-butterfly" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Nueva Mariposa</Link>
        <Link to="/creadoras" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Creadoras</Link>
        <Link to="/contacto" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Contacto</Link>
        <Link to="/sobre-nosotras" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Sobre Nosotras</Link>
      </div>
      <p>Proyecto creado en Factoría F5 - Polinizadores de América: Mariposas</p>
      <p>📧 <Link to="/contacto" style={{ color: '#3498db' }}>¿Tienes preguntas? ¡Contáctanos!</Link></p>
    </footer>
    </>
  )
}

export default Layout;