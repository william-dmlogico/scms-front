import React from 'react';
import styles from './Institucional.module.css';
import family_1 from '../../images/familia_1.svg'

const Institucional = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                SCMS <span className={styles.subtitle}>Sociedade Caxiense de Mútuo Socorro Previdência privada</span>
              </h1>
              <button className={styles.ctaButton}>Saiba mais</button>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img
                loading="lazy"
                src={family_1}
                className={styles.foregroundImage}
                alt="Ilustração representativa da Sociedade Caxiense de Mútuo Socorro"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institucional;
