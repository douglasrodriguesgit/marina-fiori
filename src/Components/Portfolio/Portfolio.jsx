import React from "react";
import Head from "../Head";
import TitlePages from "../TitlePages";
import Slide from "../Slide/Slide";


const Portfolio = () => {
  const slides = [
    {
      id: "slide 1",
      firstSlide: <div></div>,
    },
    {
      id: "slide 2",
      secondSlide: "",
    },
    {
      id: "slide 3",
      thirdSlide: "",
    },
  ];
  return (
    <div>
      <Head
        title="Portfolio"
        description="Conheça o portfolio de Marina Fiori"
      />
      <TitlePages text="Portfólio" />
      <section className="">
        <div className="slide">
          <Slide slides={slides} />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
