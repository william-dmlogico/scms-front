import React from 'react';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {

    return (
    <section className={styles.productSection}>
      <h1 className={styles.productTitle}>Produtos</h1>
      <div className={styles.underline} />
    </section>
  );
};

export default ProductsPage;