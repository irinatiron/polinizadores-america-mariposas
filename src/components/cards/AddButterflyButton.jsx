import './AddButterflyButton.css'
import { Link } from 'react-router-dom'

const AddButterflyBtn = () => {
    return (
        <Link className='btn-add-butterfly' to={`/nueva-mariposa/`}>+ Añadir mariposa</Link>
    )
}

export default AddButterflyBtn