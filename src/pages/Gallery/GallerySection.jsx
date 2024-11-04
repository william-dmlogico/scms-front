import React from 'react';
import styles from './GallerySection.module.css';

const GallerySection = () => {
  const galleryImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea863f88046ee75875a3a875cfad1abd108b9654309649bd5389407d841df66?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", alt: "Gallery image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/492b7acce82e426c69c2f1693916b7468c3b30efad19e38b561b5ef42ecd98ed?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", alt: "Gallery image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b7a116152585454a774044f939a518847d8c128fdd26889af554f8b655ecd00?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", alt: "Gallery image 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4c77b8b8f0ece4b416cbff420d35708418b95e91fc9e873613538afb86d4432?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", alt: "Gallery image 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d85b9ebd824e25a120dace08ddc0569b3881e0c19d704ff668dd02b53a19508?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", alt: "Gallery image 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/86eb5fd13df2183f2972a949a98b90cf35cd475848722236f1f19de18be196fe?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", alt: "Gallery image 6" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6259a2310edabdae872c0361a4eac5a3688772062d5c1d50669d45ea6d10afd5?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc", alt: "Gallery image 7" },
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