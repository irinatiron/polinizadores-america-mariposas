import './CardFrontButterflies.css';
import { useEffect, useState } from 'react';
import { getAllButterflies } from '../services/ButterflyServices'
import { Link } from 'react-router-dom'

const CardsButterflies = () => {// define un componente funcional (CardButterflies). Este componente va a mostrar tarjetas con información de mariposas
    const [butterflies, setButterflies] = useState([])//Crea un estado llamado butterflies, que empieza con un array vacío. Aquí se va a guardar la lista de mariposas que vienen del servidor o API
    const [loading, setLoading] = useState(true)//Crea otro estado llamado 'loading', que comienza en 'true'.Este sirve para mostrar un mensaje de "Cargando..." mientras se obtienen los datos

    useEffect(() => {//es un hook que permite ejecutar ódigo cuando el componente se monta (se muestra por primera vez)
        const fetchData = async () => {//Se define una función asíncrona (porque va a hacer una llamada a una API)
            try {
                const data = await getAllButterflies()//Intenta obtener los datos de las mariposas usando la función getAllButterflies
                const sortedData = data.sort((a, b) => a.name.localeCompare(b.name))/**AÑADIDO  a.name.localCompare(b.name) compara dos strings en orden alfab respetando acentos y may/min según el idioma*/

                setButterflies(sortedData)
                //setButterflies(data)//Cuando recibe los datos, los guarda en el estado 'butterflies
            } catch (error) {//Si ocurre un error al pedir los datos, lo muestra en la consola
                console.error('Error al cargar mariposas: ', error);
            } finally {//Cuando termina (haya salido bien o mal), pone 'loading' en 'false', indicando que ya no está cargando.
                setLoading(false)
            }
        };

        fetchData()//LLama a la función fetchData para empezar a obtener los datos cuando el compornente se monta.
    }, [])//El array vacío '[]' le dice a 'useEffect' que solo ejecute esto **una vez**, al principio

    if (loading) return <p>Cargando mariposas...</p>//Mientras loading es true, muestra un mensaje

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
                    <Link className="btn btn-ver-detalle" to={`/detalle-mariposa/${butterfly.id}`}>Ver detalle</Link>
                    <Link className="btn btn-update" to={`/editar-mariposa/${butterfly.id}`}>Editar</Link>
                </div>
            </article>
            ))}
        </div>
    )
}

export default CardsButterflies
