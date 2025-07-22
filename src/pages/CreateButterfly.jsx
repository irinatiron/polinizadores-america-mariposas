import Form from '../components/FormCreate/FormCreate';
import { createButterfly } from '../services/ButterflyServices';
import { GiButterflyFlower } from "react-icons/gi";

const CreateButterfly = () => {
  return (
    <>
      <h2 id='create-page-title'>Añadir una nueva mariposa al catálogo.</h2>
      <h3 id='create-page-intro'>¿No encuentras la mariposa que buscas? Puedes contribuir completando el siguiente formulario con sus datos para incluirla en nuestro listado.</h3>
      {/* <img src='../../src/assets/images/create-butterfly.png' id='create-butterfly'></img> */}
      <GiButterflyFlower className='big-icon' />
      <Form onSubmit={createButterfly} />
    </>
  );
};

export default CreateButterfly;
