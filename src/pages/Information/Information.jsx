import React from 'react';
import styles from './Information.module.css';

const Information = () => {
  const formFields = [
    { name: 'fullName', label: 'Nome completo' },
    { name: 'socialName', label: 'Nome social' },
    { name: 'cpf', label: 'CPF' },
    { name: 'phone', label: 'Telefone' },
    { name: 'email', label: 'E-mail' },
    { name: 'street', label: 'Rua' },
    { name: 'neighborhood', label: 'Bairro' }
  ];

  return (
    <section className={styles.informationSection}>
      <h1 className={styles.sectionTitle}>Informações</h1>
      <div className={styles.underline} />
      <p className={styles.description}>
        Atualização de cadastro do associado Campos: Nome Completo, Nome Social, CPF, Endereço rua, bairro, numero, complemento cidade, CEP, UF, telefone e e-mail
      </p>
      <form className={styles.form}>
        {formFields.map((field) => (
          <div key={field.name} className={styles.formField}>
            <label htmlFor={field.name} className={styles.visuallyHidden}>{field.label}</label>
            <input
              type="text"
              id={field.name}
              name={field.name}
              placeholder={field.label}
              className={styles.input}
            />
          </div>
        ))}
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Enviar</button>
          <button type="reset" className={styles.resetButton}>Limpar</button>
        </div>
      </form>
    </section>
  );
};

export default Information;
