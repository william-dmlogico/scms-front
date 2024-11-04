import React from 'react';
import styles from './Objective.module.css';

const Objective = () => {
  return (
    <section className={styles.objective}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Qual objetivo do segmento de previdência complementar
        </h2>
        <p className={styles.description}>
          Tem por objetivo instituir e operar planos de benefícios de caráter previdenciário concedidos em forma de renda continuada (aposentadoria) ou pagamento único (pecúlio), acessíveis a qualquer pessoa física.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Saiba mais</button>
          <button className={styles.secondaryButton}>Fale conosco</button>
        </div>
      </div>
    </section>
  );
};

export default Objective;