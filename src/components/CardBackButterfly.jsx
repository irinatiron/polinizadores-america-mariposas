import './CardBackButterfly.css';
const CardBackButterfly = () => {
    return (
        <div className="cards">
            <article className="card-butterfly">
                <div class="corner-ribbon">
                    <h4><span>Mariposa-prueba</span></h4>
                    <p><span>Locación:</span> América del Norte</p>
                </div>
                <div class="corner-order">
                    <p><span>Order:</span> Legideptira</p>
                    <p><span>Familia:</span> Nymphalidae</p>
                </div>
                <div className="img-card-one">
                    {/* <img src="" alt="img-mariposa"/> */}
                </div>
                <div class="card-content paragraph">
                    <p><span>Origen: </span>Yosemite</p>
                    <p><span>Habitat: </span>Yellowstone</p>
                    <p><span>Tamaño: </span>2 cm</p>
                    <p><span>Color: </span>Naranja rojiza con cierto tinte verde y manchas negras</p>
                    <p><span>Plantas visitadas: </span>Cirsium, Carlina, etc</p>
                    <p><span>Ciclo vital: </span> 5 meses, de verano a primavera</p>
                    <p><span>Fenología: </span> Marzo - octubre</p>
                </div>
                <div class="btns">
                    <a class="btn btn-delete" href="#">Eliminar</a>
                    <a class="btn btn-update" href="#">Editar</a>
                </div>
            </article>
        </div>
    )
}

export default CardBackButterfly