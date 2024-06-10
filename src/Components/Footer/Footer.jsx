import React from "react";
import styles from "./Footer.module.css";
import Brand from "../../Assets/icons/brandLight.svg?react";
import WhatsApp from "../../Assets/redes/whatsappDark.svg?react";
import Tiktok from "../../Assets/redes/tiktok.svg?react";
import Instagram from "../../Assets/redes/instagram.svg?react";
// import Map from "../Map/Map";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.containerFooter}>
          <div className={styles.brand}>
            <div className={styles.brandContent}>
              <Brand />
            </div>
            <div className={styles.data}>
              <p>Me acompanhe nas redes sociais.</p>
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
          </div>
          <div className={styles.openingHours}>
            <h4 className={styles.titleFooter}>Horário de Funcionamento</h4>
            <p>
              seg-sex<span> 08:00 ás 18:00</span>{" "}
            </p>
            <p>
              sáb-dom<span>08:00 ás 12:00</span>{" "}
            </p>

            <p>
              Feriados<span>Fechado</span>{" "}
            </p>

            <h5>Precisa de um horário especial ?</h5>
            <h5>Converse conosco.</h5>
          </div>

          <div className={styles.map}>
            <h4 className={styles.titleFooter}>Endereço</h4>
            <p>Rua Professor Flávio Wusterberg 1086 Campinas-SP</p>
            {/* <Map /> */}
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
