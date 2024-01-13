import React from "react";
import { NavLink } from "react-router-dom";
import Brand from "../Assets/icons/brand.svg?react";
import Contact from "../Assets/redes/whatsappLight.svg?react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} "menu"}`}>
      <NavLink className={styles.brand} to="/" end>
        {" "}
        <Brand />
      </NavLink>
      <ul className={`${styles.nav} ${styles.hamburguer} `}>
        <li>
          {" "}
          <NavLink to="/portfolio"> Portfólio</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/meconheca"> Me conheça</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/preco"> Preço</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/depoimentos">Depoimentos</NavLink>{" "}
        </li>
      </ul>
      <NavLink className={styles.contact} to="/whatsapp">
        <Contact />
      </NavLink>
    </header>
  );
};

export default Header;
