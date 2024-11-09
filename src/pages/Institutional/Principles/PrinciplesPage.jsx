import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PrinciplesSection from '../../../components/PrinciplesSection/PrinciplesSection';
import MissionVisionValues from '../../../components/MissionVisionValues/MissionVisionValues';
import styles from './PrinciplesPage.module.css';

const PrinciplesPage = () => {
    return (
        <main className={styles.mainContent}>
          <PrinciplesSection />
          <MissionVisionValues />
        </main>
    );
  };
  
  export default PrinciplesPage;