import Form from '../components/CreateForm/CreateForm';
import { createButterfly } from '../services/ButterflyServices';
import styles from './CreateButterfly.module.css';
import ButterflyWings from '../components/Animations/ButterflyWings';

const CreateButterfly = () => {
  return (
    <>
      <h2 className={styles['create-page-title']}>Añadir una nueva mariposa al catálogo</h2>
      <p className={styles['create-page-intro']}>
        ¿No encuentras la mariposa que buscas? Puedes contribuir completando el siguiente formulario con sus datos para incluirla en nuestro listado.
      </p>
      <div className={styles['butterfly-container']}>
        <ButterflyWings />
      </div>
      <Form onSubmit={createButterfly} />
    </>
  );
};

export default CreateButterfly;