import React from 'react';
import styles from './MissionVisionValues.module.css';

const MissionVisionValues = () => {
  return (
    <section className={styles.missionVisionValues}>
      <div className={styles.section}>
        <h2>Missão</h2>
        <p>
          Oferecer proteção e segurança, por meio de produtos previdenciários que atendam às necessidades dos participantes, honrando os compromissos e contribuindo para o bem-estar social.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Visão</h2>
        <p>
          Ser referência, reconhecida como entidade aberta de previdência complementar pela qualidade dos produtos, serviços oferecidos e confiabilidade no mercado.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Valores e Solidez</h2>
        <p>
          Os princípios morais acompanham a entidade que está no mercado previdenciário gaúcho e nacional há mais de cem anos. Neste período a empresa consolidou valores baseados na tradição de honrar seus compromissos e no comportamento ético com foco em seu associado.
        </p>
        <p>
          A Entidade, ao longo dos anos, construiu um sólido patrimônio, evidenciado por seus Ativos e pelo pagamento de benefícios, de forma absolutamente regular, cumprindo com a sua missão.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionValues;