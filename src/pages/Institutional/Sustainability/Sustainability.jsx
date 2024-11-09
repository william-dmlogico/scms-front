import React from "react";
import styles from './Sustainability.module.css';
import arrow from '../../../images/arrowbackbutton.svg'

function Sustainability() {
  const policies = [
    "Código de ética",
    "Política de Segurança Cibernética, da Informação e Privacidade",
    "Política de Combate e Prevenção contra Crimes de Lavagem de Dinheiro",
    "Política de Ocultação de Bens",
    "Política de Direitos e Valores",
    "Política de Gestão de Riscos",
    "Política de Controles Internos",
    "Política de Conformidade",
  ];

  return (
    <main className={styles.sustainability}>
      <h2 className={styles.subTitle}>Sustentabilidade</h2>
      <p className={styles.description}>
        A Sociedade Caxiense de Mútuo Socorro (SCMS) vem trabalhando para adotar práticas de ESG (Environmental, Social and Governance), considerando aspectos ambientais, sociais e de Governança em suas operações.
        <br /><br />
        <strong>Nesse sentido, a Entidade já implantou:</strong>
      </p>
      <div className={styles.policiesContainer}>
        {policies.map((policy, index) => (
          <div key={index} className={styles.policyItem}>
            <img loading="lazy" src={arrow} alt="" className={styles.policyIcon} />
            <span className={styles.policyText}>{policy}</span>
          </div>
        ))}
      </div>
      <p className={styles.additionalInfo}>
        Atualmente, a SCMS trabalha no desenvolvimento da sua Política de Sustentabilidade em atendimento à Circular nº 666/22.
        <br /><br />
        <a href="#" className={styles.policyLink}>POLÍTICA DE SUSTENTABILIDADE</a>
      </p>
    </main>
  );
}

export default Sustainability;