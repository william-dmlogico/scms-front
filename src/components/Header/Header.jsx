import React, { useState } from "react";
import styles from './Header.module.css';
import logo_header from '../../images/logo_header.png'
import participe_header from '../../images/participe_header.png'
import pin_header from '../../images/pin_gps_location.png'
import MenuComponent from "../Menu/MenuComponent";
import { Link, useNavigate } from "react-router-dom";


const navItems = [
  { title: "Home", path: "/", isActive: true },
  { 
    title: "Institucional", 
    isActive: false,
    submenu: [
      { title: "Princípios da entidade, Visão, Missão, Valores e Solidez" },
      { title: "História da comunidade" },
      { title: "Sustentabilidade" }
    ]
  },
  { title: "Informações", path: "/informacoes", isActive: false },
  { title: "Produtos", path: "/informacoes", isActive: false },
  { title: "Galeria", path: "/galeria", isActive: false },
  { title: "Fale conosco", path: "/", isActive: false },
  { title: "Área restrita", isActive: false }
];

function Header() {

  const navigate = useNavigate();

  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index, item) => {
    setActiveNavItem(index);
    navigate(item.path);
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
              onClick={() => handleNavItemClick(index, item)}
            >
              {item.title}
              {index === activeNavItem && <div className={styles.activeLinkUnderline} />}
              {/* Verifica se o item tem submenu */}
              {item.submenu && index === activeNavItem && (
                <ul className={styles.submenu}>
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex} className={styles.submenuItem}>
                      <Link to={submenuItem.path}>
                        {submenuItem.title}
                        </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;