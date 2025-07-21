import './CardFrontButterflies.css';
import { useEffect, useState } from 'react';
import { getAllButterflies } from '../services/ButterflyServices'

const CardsButterflies = () => {
    const [butterflies, setButterflies] = useState([])//
    const [loading, setLoading] = useState(true)//

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllButterflies()
                setButterflies(data)
            } catch (error) {
                console.error('Error al cargar mariposas: ', error);
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [])

    if (loading) return <p>Cargando mariposas...</p>

    return (
        <div className="cards">
            {butterflies.map((butterfly) => (
            <article key={butterfly.id} className="cards-butterflies">
                <div className="corner-ribbon">
                    <h4><span>{butterfly.name}</span></h4>
                </div>
                <div className="corner-order">
                    <p className='order-butterfly'><span>Order:</span> {butterfly.order}</p>
                </div>
                <div className="img-card">
                    <img className='img-butterfly' src={butterfly.img} alt={`Imagen de ${butterfly.name}`}/>
                </div>
                <div className="card-content">
                    <p><span>Fenología: </span>{butterfly.fenology}</p>
                    <p><span>Ciclo vital: </span> {butterfly.cycle}</p>
                </div>
                <div className="btns">
                    <a className="btn btn-ver-detalle" href="card.html">Ver detalle</a>
                    <a className="btn btn-update" href="#">Editar</a>
                </div>
            </article>
            ))}

        </div>
    )
}

export default CardsButterflies


// const CardsButterflies = () => {
//     return (
//         /**A lo mejor aquí envolverlo en un section */
//         <div className="cards">
//             <article className="cards-butterflies">
//                 <div className="corner-ribbon">
//                     <h4><span>Mariposa-prueba</span></h4>
//                 </div>
//                 <div className="corner-order">
//                     <p><span>Order:</span> Legideptira</p>
//                 </div>
//                 <div className="img-card">
//                     {/* <img src="" alt="img-mariposa"/> */}
//                 </div>
//                 <div className="card-content">
//                     <p><span>Fenología: </span>Marzo a octubre</p>
//                     <p><span>Ciclo vital: </span> 5 meses, de verano a primavera</p>
//                 </div>
//                 <div className="btns">
//                     <a className="btn btn-ver-detalle" href="card.html">Ver detalle</a>
//                     <a className="btn btn-update" href="#">Editar</a>
//                 </div>
//             </article>
//         </div>
//     )
// }

// export default CardsButterflies