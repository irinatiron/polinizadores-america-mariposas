import './CardsButterflies.css';
const CardsButterflies = () => {
    return (
        /**A lo mejor aquí envolverlo en un section */
        <div className="cards">
            <article className="card">
                <div class="corner-ribbon">
                        <h4><span>Mariposa-prueba</span></h4>
                    </div>
                    <div class="corner-order">
                        <p><span>Order:</span> Legideptira</p>
                    </div>
                    {/* <img src="mariposa.jpg" alt="img-mariposa"> */}
                    <div class="card-content">
                        <p><span>Fenología: </span>Marzo a octubre</p>
                        <p><span>Ciclo vital: </span> 5 meses, de verano a primavera</p>
                    </div>
                    <div class="btns">
                        <a class="btn btn-ver-detalle" href="card.html">Ver detalle</a>
                        <a class="btn btn-update" href="#">Editar</a>
                    </div>
            </article>
        </div>
    )
}

export default CardsButterflies