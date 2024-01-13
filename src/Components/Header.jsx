import React from "react";
import { NavLink } from "react-router-dom";
import Brand from "../Assets/icons/brand.svg?react";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          {" "}
          <Brand />
        </NavLink>
        <NavLink to="/portfolio"> Portfolio</NavLink>
        <NavLink to="/meconheca"> Me conheça</NavLink>
        <NavLink to="/preco"> Preço</NavLink>
        <NavLink to="/depoimentos"> Depoimentos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
