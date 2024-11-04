import React from 'react';
import styles from './Footer.module.css';
import logo_footer from '../../images/logo_footer.svg'
import icon_facebook from '../../images/IconFacebook.png'
import icon_whatsapp from '../../images/IconWhatsapp.svg'
import icon_instagram from '../../images/IconInstagram.svg'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: icon_facebook },
    { name: 'Instagram', icon: icon_instagram },
    { name: 'Whatsapp', icon: icon_whatsapp }
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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#sustainability">Sustentabilidade</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className={styles.socialLinks}>
          <h3 className={styles.sectionTitle}>Nossas redes sociais</h3>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={`#${link.name.toLowerCase()}`} className={styles.socialLink}>
                  <img src={link.icon} alt={`${link.name} icon`} className={styles.socialIcon} />
                  <span>{link.name}</span>
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

export default Footer;