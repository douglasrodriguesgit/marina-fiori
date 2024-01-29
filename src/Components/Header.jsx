import React from "react";
import { NavLink } from "react-router-dom";
import Brand from "../Assets/icons/brand.svg?react";
import Contact from "../Assets/redes/whatsappLight.svg?react";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen((open) => !open);
  }

  return (
    <header className="header">
      <NavLink className="brand" to="/" end>
        {" "}
        <Brand />
      </NavLink>

      <button
        className={` ${"mobile"} ${open ? "activeMobile" : ""} `}
        onClick={handleClick}
      ></button>

      <nav className="nav">
        <ul className={` ${open ? "activeMobile" : ""} `}>
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
