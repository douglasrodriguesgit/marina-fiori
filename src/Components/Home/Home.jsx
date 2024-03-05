import React from "react";
import Head from "../Head";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Head
        title="Home"
        description="Home do site Marina Fiori Nail Designer"
      />
      <section className={styles.container}>
        <div className={styles.info}>
          <p className="subtitle">by Marina Fiori</p>
          <h1 className="title">Beleza e saúde das unhas</h1>
          <p className={styles.textInfo}>
            A manutenção do alongamento das unhas é um processo que visa
            prolongar a durabilidade das unhas e garantir que elas continuem
            saudáveis e bonitas.
          </p>
          <p className={`${styles.text} ${"subtitle"}`}>
            Nail Designer em Campinas.
          </p>

          <button className={styles.button}>
            <a href="https://wa.me/5519988006300"> Faça seu agendamento </a>
          </button>
        </div>
        <div className={styles.image}></div>
      </section>
    </div>
  );
};

export default Home;
