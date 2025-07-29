import './Footer.css';
function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content" style={{border: "3px dotted red"}}>
                <p className="footer-logo">Mariposas de América</p>
                <p className="footer-text">Proyecto desarrollado con pasión por la naturaleza y la conservación</p>
                <a href="https://factoriaf5.org/" target='_blank' className="footer-brand">Factoría F5</a>
            </div>

        </footer>
    )
}
export default Footer;



