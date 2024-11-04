import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GallerySection from './GallerySection';
import styles from './GalleryPage.module.css';

const GalleryPage = () => {
  return (
    <div className={styles.galleryPage}>
      <Header />
      <main className={styles.mainContent}>
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;