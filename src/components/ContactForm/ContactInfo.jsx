import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <section className={styles.contactInfo}>
      <p className={styles.note}>
        Obs: Atendimento: Segunda a Sexta-feira,
        <br />
        das 09 às 18:30hs.
      </p>
      <div className={styles.infoWrapper}>
        <div className={styles.iconColumn}>
          <div className={styles.iconCircle}></div>
          <div className={styles.iconCircle}></div>
          <div className={styles.iconCircle}></div>
        </div>
        <div className={styles.textColumn}>
          <p>Fone: (54) 3221-2777 / 0800-6023101</p>
          <p>E-mail: scms@scmsprevidencia.com.br</p>
          <address>
            Endereço: Rua Garibaldi, 803 Centro
            <br />
            Caxias do Sul - RS CEP 95080-190
          </address>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;