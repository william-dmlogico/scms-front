import React, { useState } from 'react';

const Information2 = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    nomeSocial: '',
    cpf: '',
    telefone: '',
    email: '',
    rua: '',
    bairro: '',
  });
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Suponha que o endpoint seja 'https://api.exemplo.com/enviar'
      const response = await fetch('https://api.exemplo.com/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMensagemSucesso('Enviado com sucesso!');
      } else {
        alert('Ocorreu um erro ao enviar.');
      }
    } catch (error) {
        alert('Ocorreu um erro ao enviar.');
//      alert('Erro de rede: ' + error.message);
    }
  };

  const handleClear = () => {
    setFormData({
      nomeCompleto: '',
      nomeSocial: '',
      cpf: '',
      telefone: '',
      email: '',
      rua: '',
      bairro: '',
    });
    setMensagemSucesso('');
  };

  return (
    <div style={styles.container}>
      <h2>Informações</h2>
      <p>Atualização de cadastro do associado</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <input
            type="text"
            name="nomeCompleto"
            placeholder="Nome completo"
            value={formData.nomeCompleto}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="nomeSocial"
            placeholder="Nome social"
            value={formData.nomeSocial}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <p>Endereço</p>
        <div style={styles.row}>
          <input
            type="text"
            name="rua"
            placeholder="Rua"
            value={formData.rua}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={formData.bairro}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.buttonEnviar}>Enviar</button>
          <button type="button" onClick={handleClear} style={styles.buttonLimpar}>Limpar</button>
        </div>
        {mensagemSucesso && <p style={styles.successMessage}>{mensagemSucesso}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minWidth: '120px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  buttonEnviar: {
    backgroundColor: '#007b5e',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonLimpar: {
    backgroundColor: '#ffffff',
    color: '#007b5e',
    padding: '10px 20px',
    border: '1px solid #007b5e',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15px',
  },
};

export default Information2;
