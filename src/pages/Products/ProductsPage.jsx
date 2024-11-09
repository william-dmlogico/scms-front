import React from 'react';
import styles from './ProductsPage.module.css';
import ProductItem from '../../components/Product/ProductItem';

const ProductsPage = () => {

    return (
    <section className={styles.productSection}>
      <h1 className={styles.productTitle}>Produtos</h1>
      <div className={styles.underline} />
      <ProductItem />
    </section>
  );
};

export default ProductsPage;