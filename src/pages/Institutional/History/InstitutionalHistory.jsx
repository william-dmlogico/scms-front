import React from 'react';
import styles from './InstitutionalHistory.module.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Timeline from '../../../components/Timeline/Timeline';

const InstitutionalHistory = () => {
  return (
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h2 className={styles.sectionTitle}>História da comunidade</h2>
        </section>
        <section className={styles.historyContent}>
          <div className={styles.textImageWrapper}>
            <p className={styles.historyText}>
              Em sua história a comunidade caxiense viu a SCMS crescer. Tendo nos anos 60 mais de 10.000 associados, oferecendo ao mercado Pecúlio por morte, invalidez e renda mensal.
              <br /><br />
              Com a abertura dos produtos previdenciários p/ os Bancos, as Entidades genuínas de Previdência, foram perdendo sua atratividade comercial c/ isso a SCMS entrou em declínio sob o ponto de vista financeiro e operacional.
              <br /><br />
              Após esse período de estagnação e reflexão a SCMS em 2003, firmou parceria c/ o Banco BGN. Adotou uma gestão, c/ racionalização e otimização nos seus processos e custos, sem prejuízo de sua eficiência e qualidade, passando a ter seu foco de atuação junto ao funcionalismo público federal, ofertando seu Pecúlio e Assistência Financeira pelo BGN.
              <br /><br />
              Dessa forma, retomando e alavancando rapidamente sua Produção e Resultado Financeiro, vendo crescer seu superávit, liquidez e solvência a cada ano.
            </p>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c6e645aefdf46e402c1eeb03331370dea549c731d7c09e4172f270db58b421e?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc" alt="Historical image of SCMS" className={styles.historyImage} />
          </div>
        </section>
        <Timeline />
        <section className={styles.additionalInfo}>
          <p className={styles.infoText}>
            Com a evolução da discussão do modelo ideal de Previdência Social para o Brasil, o segmento de seguros e previdência privada abriu-se para os bancos em geral, e os produtos das Entidades genuínas de Previdência Privada, foram perdendo sua atratividade comercial.
          </p>
          <br />
        </section>
      </main>
  );
};

export default InstitutionalHistory;