import { useState } from 'react';
import React, { useRef } from 'react';
import styles from './ContactFormPage.module.css';
import emailjs from '@emailjs/browser';
import Modal from '../Modal/Modal';

const ContactFormPage = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dlogico_wse', 'template_utsmk3a', form.current, 'user_VlidVXepxQFrZSmZr5')
            .then(
                () => {
                    setFormData({ name: '', email: '', phone: '', message: '' });
                    setSuccessMessage('Mensagem enviada com sucesso!');
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setSuccessMessage('Falha no envio da mensagem, favor tentar novamente, daqui a pouco, ou entrar em contato por meio de outros canais.');
                }
            );
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSuccessMessage('');
    };

    const handleCloseModal = () => {
        setSuccessMessage('');
    };


    return (
        <form ref={form} className={styles.contactForm} onSubmit={sendEmail} onReset={handleReset}>
            {successMessage && <Modal message={successMessage} onClose={handleCloseModal} />}
            <div className={styles.formField}>
                <label htmlFor="name" className={styles.visuallyHidden}>Nome</label>
                <input type="text" id="name" name="name" placeholder="Nome" className={styles.input} value={formData.name} onChange={handleChange} />
            </div>
            <div className={styles.formField}>
                <label htmlFor="phone" className={styles.visuallyHidden}>Telefone</label>
                <input type="tel" id="phone" name="phone" placeholder="Telefone" className={styles.input} value={formData.phone} onChange={handleChange} />
            </div>
            <div className={styles.formField}>
                <label htmlFor="email" className={styles.visuallyHidden}>E-mail</label>
                <input type="email" id="email" name="email" placeholder="E-mail" className={styles.input} value={formData.email} onChange={handleChange} />
            </div>
            <div className={styles.formField}>
                <label htmlFor="message" className={styles.visuallyHidden}>Mensagem</label>
                <textarea id="message" name="message" placeholder="Mensagem" className={styles.textarea} value={formData.message} onChange={handleChange} ></textarea>
            </div>
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Enviar</button>
                <button type="reset" className={styles.resetButton}>Limpar</button>
            </div>
        </form>
    );
};

export default ContactFormPage;