import React from 'react';
import styles from './Banner.module.css';
import family_2 from '../../images/familia_2.svg';

//<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaccb9935be175d682b87f21a454fb914694c2b46174fe9b7a89e8bd68715854?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc" alt="SCMS Banner" className={styles.bannerImage} />
const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <img src={family_2} alt="SCMS Banner" className={styles.bannerImage} />
        <div className={styles.textContent}>
          <span className={styles.subtitle}>Sociedade Caxiense de Mútuo Socorro</span>
          <h1 className={styles.title}>Sobre a SCMS</h1>
          <p className={styles.description}>
            PREVIDÊNCIA PRIVADA fundada em 11 de Novembro de 1887 em Caxias do Sul - RS, é uma sociedade civil, autorizada a operar como uma Entidade Aberta de Previdência Complementar, Sem Fins lucrativos, com número ilimitado de associados, sem distinção de qualquer natureza e se regerá por este Estatuto e pelos Regulamentos.
          </p>
          <button className={styles.ctaButton}>Saiba mais</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;