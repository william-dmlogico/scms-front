import { useState } from 'react';
import React, { useRef } from 'react';
import styles from './Information.module.css';
import emailjs from '@emailjs/browser';
import Modal from '../../components/Modal/Modal';

const Information = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: '',
    socialName: '',
    cpf: '',
    phone: '',
    email: '',
    street: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
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
      .sendForm('service_dlogico_wse', 'template_0m21d17', form.current, {
        publicKey: 'VlidVXepxQFrZSmZr2',
      })
      .then(
        () => {
          setFormData({
            fullName: '',
            socialName: '',
            cpf: '',
            phone: '',
            email: '',
            street: '',
            complement: '',
            neighborhood: '',
            city: '',
            state: '',
            zipCode: '',
          });
          setSuccessMessage('Mensagem enviada com sucesso!');
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSuccessMessage('Falha no envio da mensagem, favor tentar novamente, daqui a pouco, ou entrar em contato por meio de outros canais.');
        }
      );
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      socialName: '',
      cpf: '',
      phone: '',
      email: '',
      street: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: '',
    });
    setSuccessMessage('');
  };

  const handleCloseModal = () => {
    setSuccessMessage('');
  };

  return (
    <section className={styles.informationSection}>
      <h1 className={styles.sectionTitle}>Informações</h1>
      <div className={styles.underline} />
      <p className={styles.description}>
      Atualização de cadastro do associado Campos: Nome Completo, Nome Social, CPF, Endereço rua, bairro, complemento, complemento cidade, CEP, UF, telefone e e-mail
      </p>
      <br />
      {successMessage && <Modal message={successMessage} onClose={handleCloseModal} />}
      <form ref={form} className={styles.form} onSubmit={sendEmail} onReset={handleReset}>
        <div className={styles.formRow}>
          <input
            type="text"
            name="fullName"
            placeholder="Nome completo"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="socialName"
            placeholder="Nome social"
            value={formData.socialName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formRow}>
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        {/* Rótulo para Endereço */}
        <div className={styles.formSectionLabel}>
          <h2>Endereço</h2>
        </div>
        <div className={styles.formRow}>
          <input
            type="text"
            name="street"
            placeholder="Rua"
            value={formData.street}
            onChange={handleChange}
            className={styles.inputLarge}
          />
          <input
            type="text"
            name="complement"
            placeholder="Complemento"
            value={formData.complement}
            onChange={handleChange}
            className={styles.inputSmall}
          />
          <input
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            value={formData.neighborhood}
            onChange={handleChange}
            className={styles.inputMedium}
          />
        </div>
        <div className={styles.formRow}>
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            value={formData.city}
            onChange={handleChange}
            className={styles.inputLarge}
          />
          <input
            type="text"
            name="state"
            placeholder="UF"
            value={formData.state}
            onChange={handleChange}
            className={styles.inputSmall}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="CEP"
            value={formData.zipCode}
            onChange={handleChange}
            className={styles.inputMedium}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
          <button type="reset" className={styles.resetButton}>
            Limpar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Information;
