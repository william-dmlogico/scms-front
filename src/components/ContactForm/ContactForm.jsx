import { useState } from 'react';
import React, { useRef } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Função para atualizar os valores dos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    console.log("Send email");
    e.preventDefault();

    emailjs
      .sendForm('service_dlogico_wse', 'template_utsmk3a', form.current, {
        publicKey: 'VlidVXepxQFrZSmZr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setSuccessMessage('Mensagem enviada com sucesso!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSuccessMessage('');
  };
  
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Fale Conosco</h2>
      <p className={styles.description}>
        Nos mande uma mensagem e em breve entraremos em contato.
      </p>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <form ref={form} className={styles.form}  onSubmit={sendEmail} onReset={handleReset}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.visuallyHidden}>Nome</label>
          <input type="text" name="name" id="name" placeholder="Nome" className={styles.input} value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.visuallyHidden}>Telefone</label>
          <input type="tel" id="phone" name="phone" placeholder="Telefone" className={styles.input} value={formData.phone} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
          <input type="email" id="email" name="email" placeholder="Email" className={styles.input} value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.visuallyHidden}>Mensagem</label>
          <textarea id="message" placeholder="Mensagem" name="message" className={styles.textarea} value={formData.message} onChange={handleChange}></textarea>
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