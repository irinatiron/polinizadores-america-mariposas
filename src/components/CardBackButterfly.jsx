import './CardBackButterfly.css';
import { useEffect, useState } from 'react';
import { getOneButterfly, deleteButterfly } from '../services/ButterflyServices';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




const CardBackButterfly = () => {//Componente funcional
    const { id } = useParams() //Para obtener el ID desde la URL
    const navigate = useNavigate();
    const [butterfly, setButterfly] = useState(null)//Estado para guardar los datos de la mariposa que obtienes de la API. Empieza como null mientras se carga
    const [loading, setLoading] = useState(true)//Otro estado que indica si la mariposa todavíase está cargando. Empiea en true y se pone en false cuando termina la carga

    useEffect(() => {//Se ejecuta cuando el componente se monta o cuando cambia el id
        const fetchButterfly = async () => {
            try {
                const data = await getOneButterfly(id) //Llama solo a 1 mariposa
                setButterfly(data)//Guardas esos datos recibidos en el estado butterfly
            } catch (error) {
                console.error('Error cargando la mariposa: ', error)
            } finally {
                setLoading(false)//Para que React sepa que ya terminó la carga
            }
        }

        fetchButterfly()
    }, [id])//El array [id] indica que se ejecuta este efecto cuando el componente se monta o si cambia el ID

    if (loading) return <p>Cargando mariposa...</p>//Mientras la mariposa se esté cargando, se muestra este mensaje
    if (!butterfly) return <p>No se encontró la mariposa</p>//Si no se encontró nada(ej ID inválido), se muestra este otro mensaje


    //Alert message showed before the card is deleted 
    const handleDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará la mariposa permanentemente.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false,
            customClass: {
                popup: 'my-swal-popup',
                title: 'my-swal-title',
                confirmButton: 'my-confirm-btn',
                cancelButton: 'my-cancel-btn'
            }

        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteButterfly(id);
                    navigate('/fichas-mariposas'); // o la ruta que lleve al listado principal
                } catch (error) {
                    console.error('Error al eliminar:', error);
                }
            }
        });
    };

    return (
        <div className="cards">
            <article className="card-butterfly-back">
                <div className="corner-ribbon-back">
                    <h4><span>{butterfly.name}</span></h4>
                    <p><span>Localización:</span> {butterfly.location}</p>
                </div>
                <div className="corner-order-back">
                    <p><span>Order:</span> {butterfly.order}</p>
                    <p><span>Familia:</span> {butterfly.family}</p>
                </div>
                <div className="img-card-one">
                    <img className='img-butterfly-back' src={butterfly.img} alt={`Imagen de ${butterfly.name}`} />
                </div>
                <div className="card-content-back paragraph">
                    <p><span>Origen: </span>{butterfly.origin}</p>
                    <p><span>Habitat: </span>{butterfly.habitat}</p>
                    <p><span>Tamaño: </span>{butterfly.size}</p>
                    <p><span>Color: </span>{butterfly.color}</p>
                    <p><span>Plantas visitadas: </span>{butterfly.plants}</p>
                    <p><span>Ciclo vital: </span>{butterfly.cycle}</p>
                    <p><span>Fenología: </span>{butterfly.fenology}</p>
                </div>
                <div className="btns-back">
                    <button className="btn-back btn-delete" onClick={() => handleDelete(butterfly.id)}>
                        Eliminar
                    </button>
                    <Link className="btn-back btn-update" to={`/editar-mariposa/${butterfly.id}`}>Editar</Link>
                    <Link to="/fichas-mariposas" className="btn-back btn-home">Volver</Link>
                </div>
            </article>
        </div>
    )
}

export default CardBackButterfly