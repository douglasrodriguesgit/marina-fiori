import React from "react";
import Head from "../Head";
import TitlePages from "../TitlePages";
import styles from "./Price.module.css";

const Price = () => {
  return (
    <div>
      <Head
        title="Preço"
        description="valores dos serviços realizados de Marina Fiori"
      />
      <TitlePages text="Preços e Serviços" />
      <section className={styles.container}>
        <div className={styles.content}>
          <h3> Extensão de unha </h3>
          <p>
            As unhas de gel estão em alta em todos os salões de beleza. Esse
            alongamento à base de um gel fino e transparente se tornou o
            queridinho de quem quer unhas grandes e resistentes.{" "}
          </p>
          <span>R$90,00</span>

          <h3>Fibra de vidro </h3>
          <p>
            O alongamento de unha de fibra de vidro é uma técnica utilizada com
            filamentos de fibra de vidro que são moldados sobre a unha natural.O
            alongamento com fibra de vidro é mais resistente do que as unhas de
            gel.{" "}
          </p>
          <span>R$120,00</span>

          <h3>Blindagem da fibra </h3>
          <p>
            Esse procedimento promete fortalecer a unha natural, evitando
            quebras e a descamação do esmalte. “Ele permite uma maior
            durabilidade do esmalte, garantindo uma excelente esmaltação por 15
            dias.{" "}
          </p>
          <span>R$130,00</span>
        </div>
      </section>
    </div>
  );
};

export default Price;
