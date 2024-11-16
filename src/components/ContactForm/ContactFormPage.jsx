import React from 'react';
import styles from './ContactFormPage.module.css';

const ContactFormPage = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.visuallyHidden}>Nome</label>
        <input type="text" id="name" placeholder="Nome" className={styles.input} />
      </div>
      <div className={styles.formField}>
        <label htmlFor="phone" className={styles.visuallyHidden}>Telefone</label>
        <input type="tel" id="phone" placeholder="Telefone" className={styles.input} />
      </div>
      <div className={styles.formField}>
        <label htmlFor="email" className={styles.visuallyHidden}>E-mail</label>
        <input type="email" id="email" placeholder="E-mail" className={styles.input} />
      </div>
      <div className={styles.formField}>
        <label htmlFor="message" className={styles.visuallyHidden}>Mensagem</label>
        <textarea id="message" placeholder="Mensagem" className={styles.textarea}></textarea>
      </div>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitButton}>Enviar</button>
        <button type="reset" className={styles.resetButton}>Limpar</button>
      </div>
      </form>
  );
};

export default ContactFormPage;