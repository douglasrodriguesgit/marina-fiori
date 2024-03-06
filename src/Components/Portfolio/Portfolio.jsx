import React from "react";
import Head from "../Head";
import TitlePages from "../TitlePages";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import styles from "./Portfolio.module.css";
import Imagem1 from "../../Assets/image/portfolio/portfolio1.jpg";
import Imagem2 from "../../Assets/image/portfolio/portfolio2.jpg";
import Imagem3 from "../../Assets/image/portfolio/portfolio3.jpg";
import Imagem4 from "../../Assets/image/portfolio/portfolio4.jpg";
import Imagem5 from "../../Assets/image/portfolio/portfolio5.jpg";
import Imagem6 from "../../Assets/image/portfolio/portfolio6.jpg";
import Imagem7 from "../../Assets/image/portfolio/portfolio7.jpg";
import Imagem8 from "../../Assets/image/portfolio/portfolio8.jpg";

const Portfolio = () => {
  const data = [
    {
      id: "1",
      image: { Imagem1 },
    },
    {
      id: "2",
      image: { Imagem2 },
    },

    {
      id: "3",
      image: { Imagem3 },
    },

    {
      id: "4",
      image: { Imagem4 },
    },

    {
      id: "5",
      image: { Imagem5 },
    },

    {
      id: "6",
      image: { Imagem6 },
    },

    {
      id: "7",
      image: { Imagem7 },
    },

    {
      id: "8",
      image: { Imagem8 },
    },
  ];

  return (
    <div>
      <Head
        title="Portfolio"
        description="Conheça o portfolio de Marina Fiori"
      />
      <TitlePages text="Portfólio" />
      <section className={`${styles.containerSlide} ${"animeLeft"}`}>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
                 <SwiperSlide>
            <img src={Imagem1} alt="unhas pintadas" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imagem2} alt="unhas pintadas" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Imagem3} alt="unhas pintadas" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Imagem4} alt="unhas pintadas" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Imagem5} alt="unhas pintadas" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Imagem6} alt="unhas pintadas" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Imagem7} alt="unhas pintadas" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Imagem8} alt="unhas pintadas" />
          </SwiperSlide>
        </Swiper>
      </section>
      <div className={styles.text}>
        <h2 className="subtitle">
          Realize agora o seu <span><a href="https://wa.me/5519988006300">agendamento aqui.</a></span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;
