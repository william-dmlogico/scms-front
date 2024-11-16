import React from 'react';
import ContactFormPage from '../../components/ContactForm/ContactFormPage';
import styles from './ContactPage.module.css';
import icon_phone from '../../images/icon_phone.svg';
import icon_mail from '../../images/icon_mail.png';
import icon_pin from '../../images/icon_pin.png';

const ContactPage = () => {
  return (
      <main className={styles.mainContent}>
        <section className={styles.contactSection}>
          <h1 className={styles.pageTitle}>Fale Conosco</h1>
          <div className={styles.underline}></div>
          <div className={styles.contactContent}>
            <ContactInfo />
            <ContactFormPage />
          </div>
        </section>
      </main>
  );
};

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <p className={styles.officeHours}>
        Obs: Atendimento: Segunda a Sexta-feira,
        <br />
        das 09 às 18:30hs.
      </p>
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <img src={icon_phone} alt={icon_phone} className={styles.iconCircle}></img>
          <span className={styles.infoText}>Fone: (54) 3221-2777 / 0800-6023101</span>
        </div>
        <div className={styles.infoItem}>
          <img src={icon_mail} alt={icon_mail} className={styles.iconCircle}></img>
          <span className={styles.infoText}>E-mail: scms@scmsprevidencia.com.br</span>
        </div>
        <div className={styles.infoItem}>
          <img src={icon_pin} alt={icon_pin} className={styles.iconCircle}></img>
          <span className={styles.infoText}>
            Endereço: Rua Garibaldi, 803 Centro
            <br />
            Caxias do Sul - RS CEP 95080-190
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;