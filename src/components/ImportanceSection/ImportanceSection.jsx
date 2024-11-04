import React from 'react';
import styles from './ImportanceSection.module.css';
import family_3 from '../../images/familia_3.svg'

const ImportanceSection = () => {
  const importanceItems = [
    { title: 'Vida', description: 'O ser humano, está vivendo mais;' },
    { title: 'Trabalho', description: 'Menos trabalhos formais;' },
    { title: 'Natalidade', description: 'Taxa de natalidade diminuindo.' }
  ];

  return (
    <section className={styles.importanceSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h3 className={styles.subtitle}>Investindo no seu futuro</h3>
          <h2 className={styles.title}>A importância da previdência complementar:</h2>
          <p className={styles.description}>
            Existe hoje uma diminuição de ingresso na Previdência Pública, ou seja menor a arrecadação para pagar os aposentados, gerando assim um desequilíbrio financeiro.
          </p>
          <div className={styles.itemsContainer}>
            {importanceItems.map((item, index) => (
              <div key={index} className={styles.item}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
          <button className={styles.ctaButton}>Saiba mais</button>
        </div>
        <img src={family_3} alt="Importance of complementary pension" className={styles.image} />
      </div>
    </section>
  );
};

export default ImportanceSection;