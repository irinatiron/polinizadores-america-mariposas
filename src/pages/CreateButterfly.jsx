import Form from '../components/FormCreate';
import { createButterfly } from '../services/ButterflyServices';

const CreateButterfly = () => {
  return (
    <>
      <p>Nueva mariposa.</p>
      <Form onSubmit={createButterfly} />
    </>
  );
};

export default CreateButterfly;
