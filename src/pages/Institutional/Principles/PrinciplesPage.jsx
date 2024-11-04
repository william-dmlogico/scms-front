import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PrinciplesSection from '../../../components/PrinciplesSection/PrinciplesSection';
import MissionVisionValues from '../../../components/MissionVisionValues/MissionVisionValues';
import styles from './PrinciplesPage.module.css';

const PrinciplesPage = () => {
    return (
      <div className={styles.institutionalPage}>
        <Header />
        <main className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Institucional</h1>
          <div className={styles.titleUnderline}></div>
          <PrinciplesSection />
          <MissionVisionValues />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default PrinciplesPage;