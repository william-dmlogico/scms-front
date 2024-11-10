import React from 'react';
import styles from './PrinciplesSection.module.css';
import imagem_institucional from '../../images/institutional/institucional_foto.svg'

const PrinciplesSection = () => {
  const principles = [
    "Garantir, por meios previdenciários, a segurança das famílias beneficiárias, por ocasião da falta do associado subscritor.",
    "Difundir, junto à comunidade, valores de lealdade e transparência, inerentes à atividade previdenciária.",
    "Exercer papel assistencial, dentro de regras fixadas pelo governo, junto aos associados e beneficiários."
  ];

  return (
    <section className={styles.principlesSection}>
      <div className={styles.textContent}>
        <h2>Princípios da entidade</h2>
        <p>
          Nestes anos de existência a SCMS consolidou entre seus colaboradores, comunidade, associados e beneficiários, princípios e credos que tem balizado suas metas e ações, de modo a honrar seus compromissos com dignidade, conforme descrito abaixo:
        </p>
        <ul className={styles.principlesList}>
          {principles.map((principle, index) => (
            <li key={index} className={styles.principleItem}>
              <span className={styles.principleNumber}>{index + 1}</span>
              {principle}
            </li>
          ))}
        </ul>
      </div>
      <img src={imagem_institucional} alt="Principles illustration" className={styles.principlesImage} />
    </section>
  );
};

export default PrinciplesSection;