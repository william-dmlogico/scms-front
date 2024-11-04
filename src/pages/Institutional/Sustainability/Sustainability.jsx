import React from 'react';
import styles from './Sustainability.module.css';

function Sustainability() {
  const policies = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cf1a05947d7046d2e698edd99192ab0ecdcebfd75877ce99cde408167310354?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Código de ética" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8326b4c010b22b738d03bc17f3e9a49470ba929b7861ce3f524c5650dd37945?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Política de Segurança Cibernética, da Informação e Privacidade" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/499f9cf4f58a4568ec52b9063c178358ce96a5129c3516296542d232a3f055e0?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Política de Combate e Prevenção contra Crimes de Lavagem de Dinheiro" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4be17dee41a69199c6c382ef22816b953628599bcbff3b01c85474b29dde542c?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Política de Ocultação de Bens" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8655dc366be52136d173c76cd1a4d55deddff5e34e6ba19958698a961f3da0?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Política de Direitos e Valores" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16e819ba84d73d6b628ff95579b9b256cd03ef4529fea873ba02d3193be7a9b3?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Política de Gestão de Riscos" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6087b555627cd0f173f994fb221b77b3191dc11e930b818b4b41603772ac0a83?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Política de Controles Internos" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbd9a1e972496e12e4c1ca5aba08005cfa5bee90b660067f9999bf23865435fa?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", text: "Política de Conformidade" },
  ];

  return (
    <main className={styles.sustainability}>
      <h1 className={styles.pageTitle}>Institucional</h1>
      <div className={styles.titleUnderline} />
      <h2 className={styles.sectionTitle}>Sustentabilidade</h2>
      <p className={styles.description}>
        A Sociedade Caxiense de Mútuo Socorro (SCMS) vem trabalhando para adotar práticas de ESG (Environmental, Social and Governance), considerando aspectos ambientais, sociais e de Governança em suas operações.
        <br /><br />
        <strong>Nesse sentido, a Entidade já implantou:</strong>
      </p>
      <div className={styles.listContainer}>
        <div className={styles.listColumn}>
          {policies.slice(0, 4).map((policy, index) => (
            <div key={index} className={styles.listItem}>
              <img src={policy.icon} alt="" className={styles.listIcon} />
              <span className={styles.listText}>{policy.text}</span>
            </div>
          ))}
        </div>
        <div className={styles.listColumn}>
          {policies.slice(4).map((policy, index) => (
            <div key={index} className={styles.listItem}>
              <img src={policy.icon} alt="" className={styles.listIcon} />
              <span className={styles.listText}>{policy.text}</span>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.policyLink}>
        Atualmente, a SCMS trabalha no desenvolvimento da sua Política de Sustentabilidade em atendimento à Circular nº 666/22.
        <br /><br />
        <a href="#politica-sustentabilidade">POLÍTICA DE SUSTENTABILIDADE</a>
      </p>
    </main>
  );
}

export default Sustainability;
