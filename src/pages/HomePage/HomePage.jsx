import React from 'react';
import Header from '../../components/Header/Header';
import Institucional from '../../components/Institucional/Institucional';
import Banner from '../../components/Banner/Banner';
import Objective from '../../components/Objective/Objective';
import ImportanceSection from '../../components/ImportanceSection/ImportanceSection';
import ContactForm from '../../components/ContactForm/ContactForm';
import MapComponent from '../../components/Map/MapComponent';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
        <Institucional />
        <Banner />
        <Objective />
        <ImportanceSection />
        <ContactForm />
        <MapComponent />
    </div>
  );
};

export default HomePage;