import React from 'react';
import styles from './GallerySection.module.css';
import imagem_1 from '../../images/gallery/galeria_1.png'
import imagem_2 from '../../images/gallery/galeria_2.png'
import imagem_3 from '../../images/gallery/galeria_3.png'
import imagem_4 from '../../images/gallery/galeria_4.png'
import imagem_5 from '../../images/gallery/galeria_5.png'
import imagem_6 from '../../images/gallery/galeria_6.png'
import imagem_7 from '../../images/gallery/galeria_7.png'

const GallerySection = () => {
  const galleryImages = [
    { src: imagem_1, alt: "Gallery image 1" },
    { src: imagem_2, alt: "Gallery image 2" },
    { src: imagem_3, alt: "Gallery image 3" },
    { src: imagem_4, alt: "Gallery image 4" },
    { src: imagem_5, alt: "Gallery image 5" },
    { src: imagem_6, alt: "Gallery image 6" },
    { src: imagem_7, alt: "Gallery image 7" },
  ];

  return (
    <section className={styles.gallerySection}>
      <h1 className={styles.galleryTitle}>Galeria</h1>
      <div className={styles.titleUnderline} />
      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            className={styles.galleryImage}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;