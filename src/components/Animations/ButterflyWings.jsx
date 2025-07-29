import styles from './ButterflyWings.module.css';

const ButterflyWings = () => {
  return (
    <div>
      <div className={styles.butterfly}>
        <div className={styles.wing}>
          <div className={styles.bit}></div>
          <div className={styles.bit}></div>
        </div>
        <div className={styles.wing}>
          <div className={styles.bit}></div>
          <div className={styles.bit}></div>
        </div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default ButterflyWings;
