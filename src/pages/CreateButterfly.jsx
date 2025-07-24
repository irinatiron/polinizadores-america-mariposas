import Form from '../components/CreateForm/CreateForm';
import { createButterfly } from '../services/ButterflyServices';
import { GiButterflyFlower } from "react-icons/gi";
import styles from './CreateButterfly.module.css';

const CreateButterfly = () => {
  return (
    <>
      <h2 className={styles['create-page-title']}>Añadir una nueva mariposa al catálogo.</h2>
      <h3 className={styles['create-page-intro']}>
        ¿No encuentras la mariposa que buscas? Puedes contribuir completando el siguiente formulario con sus datos para incluirla en nuestro listado.
      </h3>
      {/* <img src='../../src/assets/images/create-butterfly.png' className={styles['create-butterfly']} alt="Mariposa"/> */}
      <GiButterflyFlower className={styles['big-icon']} />
      <Form onSubmit={createButterfly} />
    </>
  );
};

export default CreateButterfly;
