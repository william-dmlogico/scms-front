import React, { useState } from "react";
import styles from './Header.module.css';
import logo_header from '../../images/logo_header.png'
import participe_header from '../../images/participe_header.png'
import pin_header from '../../images/pin_gps_location.png'

const navItems = [
  { title: "Institucional", isActive: true },
  { title: "Informações", isActive: false },
  { title: "Produtos", isActive: false },
  { title: "Galeria", isActive: false },
  { title: "Fale conosco", isActive: false },
  { title: "Área restrita", isActive: false }
];

function Header() {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.addressWrapper}>
          <img loading="lazy" src={pin_header} className={styles.icon} alt="" />
          <address className={styles.address}>
            Rua Garibaldi, 803 Centro - Caxias do Sul - RS CEP 95080-190
          </address>
        </div>
        <div className={styles.participateWrapper}>
          <img loading="lazy" src={participe_header} className={styles.participateIcon} alt="" />
          <span className={styles.participateText}>Participe</span>
        </div>
      </div>
      <nav className={styles.navbar}>
        <img loading="lazy" src={logo_header} className={styles.logo} alt="Company Logo" />
        <ul className={styles.navLinks}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={index === activeNavItem ? styles.activeLink : styles.navLink}
              onClick={() => handleNavItemClick(index)}
            >
              {item.title}
              {index === activeNavItem && <div className={styles.activeLinkUnderline} />}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;