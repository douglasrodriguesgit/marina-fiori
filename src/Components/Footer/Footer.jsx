import React from "react";
import styles from "./Footer.module.css";
import Brand from "../../Assets/icons/brandLight.svg?react";
import WhatsApp from "../../Assets/redes/whatsappDark.svg?react";
import Tiktok from "../../Assets/redes/tiktok.svg?react";
import Instagram from "../../Assets/redes/instagram.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Brand />
      </div>

      <div className={styles.openingHours}>
        <h4 className={styles.titleFooter}>Horário de funcionamento</h4>
        <p>
          seg-sex<span> 08:00 ás 18:00</span>{" "}
        </p>
        <p>
          sáb-dom<span>08:00 ás 12:00</span>{" "}
        </p>
      </div>
      <div className={styles.data}>
        <h4 className={styles.titleFooter}>19 98800-6300</h4>
        <ul className={styles.redes}>
          <li>
            <WhatsApp />{" "}
          </li>
          <li>
            <Tiktok />{" "}
          </li>
          <li>
            <Instagram />{" "}
          </li>
        </ul>
      </div>
      <div className={styles.map}>
        <h4 className={styles.titleFooter}>Localização</h4>
      </div>
    </footer>
  );
};

export default Footer;
