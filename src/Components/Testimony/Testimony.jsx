import React from "react";
import Head from "../Head";
import TitlePages from "../TitlePages";
import Slide from "../Slide/Slide";

const Testimony = () => {
  const slides = [
    {
      id: "slide 1",
      firstSlide: <div></div>,
    },
    {
      id: "slide 2",
      secondSlide: <div></div>,
    },
    {
      id: "slide 3",
      thirdSlide: <div></div>,
    },
  ];
  return (
    <div>
      <Head title="Depoimentos" description="Depoimentos de nossos clientes" />
      <TitlePages text="Depoimentos de nossas clientes" />
      <Slide slides={slides} />
    </div>
  );
};

export default Testimony;
