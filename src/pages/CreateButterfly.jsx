import Form from '../components/FormCreate';
import { createButterfly } from '../services/ButterflyServices';

const CreateButterfly = () => {
  return (
    <>
      <h3 id='create-page-title'>Añadir una nueva mariposa al catálogo.</h3>
      <p id='create-page-intro'>¿No encuentras la mariposa que buscas? Puedes contribuir completando el siguiente formulario con sus datos para incluirla en nuestro listado.</p>
      <img src='../../public/create-butterfly.png' id='create-butterfly'></img>
      <Form onSubmit={createButterfly} />
    </>
  );
};

export default CreateButterfly;
