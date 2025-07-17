import Form from '../components/FormCreate';
import { createButterfly } from '../services/ButterflyServices';

const CreateButterfly = () => {
  return (
    <>
      <h3 id='create-page-title'>Añadir una nueva mariposa al catálogo.</h3>
      <Form onSubmit={createButterfly} />
    </>
  );
};

export default CreateButterfly;
