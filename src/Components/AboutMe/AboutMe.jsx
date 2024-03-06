import React from "react";
import Head from "../Head";
import TitlePages from "../TitlePages";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div>
      <Head
        title="Sobre mim"
        description="Saiba mais sobre a Nail Designer Marina Fiori"
      />
      <TitlePages text="Me conheça" />
      <section className={`${styles.container} ${"animeLeft"}`}>
        <div className={`${"title"} ${styles.brand}`}>
          <h3>Marina Fiori</h3>
        </div>
        <div className={styles.image}></div>
        <div className={styles.aboutMe}>
          <p className={`${"subtitle"} ${styles.description}`}>
            Nail Designer especialista
          </p>
          <h2 className={`${"subtitle"} ${styles.title}`}>Sobre mim</h2>
          <p className={`${"subtitle"} ${styles.text}`}>
            {" "}
            Designer de unhas, apaixonada pela solução prática que os
            alongamentos com fibra de vidro trazem para a vida de toda mulher.
            Atuo na área há 8 anos, mudando a vida de mulheres.
          </p>
          <p className={`${"subtitle"} ${styles.text}`}>
            {" "}
            Realizo trabalhos de unhas de fibra de vidro com acabamentos
            naturais, espessura bem fininha, muito resistente e com a
            personalização que combine com o seu estilo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
