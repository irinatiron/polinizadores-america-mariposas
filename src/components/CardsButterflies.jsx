import './CardsButterflies.css';
const CardsButterflies = () => {
    return (
        /**A lo mejor aquí envolverlo en un section */
        <div className="cards">
            <article className="cards-butterflies">
                <div className="corner-ribbon">
                    <h4><span>Mariposa-prueba</span></h4>
                </div>
                <div className="corner-order">
                    <p><span>Order:</span> Legideptira</p>
                </div>
                <div className="img-card">
                    {/* <img src="" alt="img-mariposa"/> */}
                </div>
                <div className="card-content">
                    <p><span>Fenología: </span>Marzo a octubre</p>
                    <p><span>Ciclo vital: </span> 5 meses, de verano a primavera</p>
                </div>
                <div className="btns">
                    <a className="btn btn-ver-detalle" href="card.html">Ver detalle</a>
                    <a className="btn btn-update" href="#">Editar</a>
                </div>
            </article>
        </div>
    )
}

export default CardsButterflies