import React from "react";
import Head from "../Head";
import TitlePages from "../TitlePages";
import Slide from "../Slide/Slide";


const Portfolio = () => {
  const slides = [
    {
      id: "slide 1",
      text: "slide 1",
    },
    {
      id: "slide 2",
      text: "slide 2",
    },
    {
      id: "slide 3",
      text: "slide 3",
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
