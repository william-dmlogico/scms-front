import React from 'react';
import styles from './MapComponent.module.css';
import map_scms from '../../images/mapScms.svg'

function MapComponent() {
  return (
    <img
      loading="lazy"
      src={map_scms}
      className={styles.image}
      alt="Description of the image"
    />
  );
}
/*
    <div className={styles.image}
    alt="Description of the image"> 
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55738.03268737501!2d-51.207346234363925!3d-29.175660751272403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea32c444d84b5%3A0x25b78270b68834dd!2sR.%20Garibaldi%2C%20803%20-%20Centro%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095080-190!5e0!3m2!1spt-BR!2sbr!4v1730423633238!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<img
loading="lazy"
src={map_scms}
className={styles.image}
alt="Description of the image"
/>
*/
//src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0f596650edb2a6049407ab1c5738342a4c042103aab49edbfe0ffda598b082?placeholderIfAbsent=true&apiKey=2e7ba8381ca4414b831475c37bf6e9cc"

export default MapComponent;