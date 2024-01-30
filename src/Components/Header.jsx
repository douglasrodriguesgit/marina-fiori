import React from "react";
import { NavLink } from "react-router-dom";
import Brand from "../Assets/icons/brand.svg?react";
import Contact from "../Assets/redes/whatsappLight.svg?react";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setOpen((open) => !open);
    setAtivo((ativo) => !ativo);
  }

  return (
    <header className="header">
      <NavLink className="brand" to="/" end>
        {" "}
        <Brand />
      </NavLink>

      <span
        className={` ${"menuHamburguer"} ${ativo ? "menuClose" : ""} `}
        onClick={handleClick}
      ></span>

      <nav className="nav">
        <ul className={` ${open ? "menuOpen" : ""} `}>
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

          <li>
            <NavLink className="contact" to="/whatsapp">
              <Contact />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
