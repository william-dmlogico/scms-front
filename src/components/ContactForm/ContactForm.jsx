import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Fale Conosco</h2>
      <p className={styles.description}>
        Nos mande uma mensagem e em breve entraremos em contato.
      </p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.visuallyHidden}>Nome</label>
          <input type="text" id="name" placeholder="Nome" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.visuallyHidden}>Telefone</label>
          <input type="tel" id="phone" placeholder="Telefone" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
          <input type="email" id="email" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.visuallyHidden}>Mensagem</label>
          <textarea id="message" placeholder="Mensagem" className={styles.textarea}></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Enviar</button>
          <button type="reset" className={styles.resetButton}>Limpar</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;