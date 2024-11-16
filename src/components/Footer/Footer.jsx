import React from 'react';
import styles from './Footer.module.css';
import logo_footer from '../../images/logo_footer.svg'
import icon_facebook from '../../images/IconFacebook.png'
import icon_whatsapp from '../../images/IconWhatsapp.svg'
import icon_instagram from '../../images/IconInstagram.svg'
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const handleNavItemClick = (index, item) => {
    if (item.path) {
      navigate(item.path);
      window.scrollTo(0, 0);
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: icon_facebook },
    { name: 'Instagram', icon: icon_instagram },
    { name: 'Whatsapp', icon: icon_whatsapp }
  ];

  const navItems = [
    { title: "Home", path: "/scms", isActive: true },
    { title: "Sobre", path: "/scms/historia", isActive: false },
    { title: "Sustentabilidade", path: "/scms/sustentabilidade", isActive: false },
    { title: "Galeria", path: "/scms/galeria", isActive: false },
    { title: "Contato", path: "/scms", isActive: false }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src={logo_footer} alt="SCMS Logo" className={styles.logo} />
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>Contatos</h3>
          <address className={styles.address}>
            Telefone: (54) 3221-2777<br />
            E-mail: scms@scmsprevidencia.com.br<br />
            Endereço: Rua Garibaldi, 803 Centro - Caxias do Sul - RS CEP 95080-190
          </address>
        </div>
        <nav className={styles.pageLinks}>
          <h3 className={styles.sectionTitle}>Page</h3>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <span 
                  onClick={() => handleNavItemClick(index, item)}
                  className={styles.linkItem}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.socialLinks}>
          <h3 className={styles.sectionTitle}>Nossas redes sociais</h3>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={`#${link.name.toLowerCase()}`} className={styles.socialLink}>
                  <img src={link.icon} alt={`${link.name} icon`} className={styles.socialIcon} />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 Todos os direitos reservados | Sociedade Caxiense de Mútuo Socorro
      </div>
    </footer>
  );
};

/*                      
<li><a href="#home">Home</a></li>
<li><a href="#about">Sobre nós</a></li>
<li><a href="#sustainability">Sustentabilidade</a></li>
<li><a href="#gallery">Galeria</a></li>
<li><a href="#contact">Contato</a></li>
*/

export default Footer;