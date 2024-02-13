import React from "react";
import styles from "./Slide.module.css";
import ArrowLeft from "../../Assets/icons/arrowLeft.svg?react";
import ArrowRight from "../../Assets/icons/arrowRight.svg?react";
import segundoSlideImg1 from "../../Assets/image/testimony/testimony-1.jpg";
import segundoSlideImg2 from "../../Assets/image/testimony/testimony-2.jpg";
import segundoSlideImg3 from "../../Assets/image/testimony/testimony-3.jpg";
import primeiroSlideImg4 from "../../Assets/image/testimony/testimony-4.jpg";
import primeiroSlideImg5 from "../../Assets/image/testimony/testimony-5.jpg";
import primeiroSlideImg6 from "../../Assets/image/testimony/testimony-6.jpg";
import terceiroSlideImg7 from "../../Assets/image/testimony/testimony-7.jpg";
import terceiroSlideImg8 from "../../Assets/image/testimony/testimony-8.jpg";
import terceiroSlideImg9 from "../../Assets/image/testimony/testimony-9.jpg";

const Slide = ({ slides }) => {
  const [slideActive, setSlideActive] = React.useState(1);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * slideActive));
  }, [slideActive]);

  function slidePrev() {
    if (slideActive > 0) setSlideActive(slideActive - 1);
  }

  function slideNext() {
    if (slideActive < slides.length - 1) setSlideActive(slideActive + 1);
  }

  return (
    <section className={styles.containerSlide}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px` }}
      >
        {slides.map((slide) => (
          <div className={styles.item} key={slide.id}>
            {slide.firstSlide && (
              <section className={styles.contentSlide}>
                <div>
                  <img
                    src={primeiroSlideImg4}
                    alt="Depoimento Cliente Daniela"
                  />
                  <h3>Daniela</h3>
                  <p>
                    Sem comentários para o trabalho da Marina, excelente
                    profissonal! ambiente muito acolhedor.
                  </p>
                </div>

                <div>
                  <img
                    src={primeiroSlideImg5}
                    alt="Depoimento Cliente Mariana"
                  />
                  <h3>Mariana</h3>
                  <p>
                    Sempre sou bem atendida, e fico muito feliz com o trabalho
                    da Marina e os produtos de qualidade que ela usa.
                  </p>
                </div>

                <div>
                  <img
                    src={primeiroSlideImg6}
                    alt="Depoimento Cliente Camila"
                  />
                  <h3>Camila</h3>
                  <p>
                    Faço minhas unhas há anos com a Marina, ela sempre faz um
                    trabalho impecável super recomendo.
                  </p>
                </div>
              </section>
            )}
            {slide.secondSlide && (
              <section className={styles.contentSlide}>
                <div>
                  <img src={segundoSlideImg1} alt="Depoimento Cliente Kátia" />
                  <h3>Kátia</h3>
                  <p>
                    Eu amei o espaço e o atendimento no geral. Ao começar pela
                    recepção que foi muito gentil e muita paciência.
                  </p>
                </div>

                <div>
                  <img src={segundoSlideImg2} alt="Depoimento Cliente Lorena" />
                  <h3>Lorena</h3>
                  <p>
                    Studio super aconchegante! Todas funcionárias sempre muito
                    simpáticas e atenciosas!
                  </p>
                </div>

                <div>
                  <img src={segundoSlideImg3} alt="Depoimento Cliente Flávia" />
                  <h3>Flávia</h3>
                  <p>
                    Incrível! Estava a muito tempo sem fazer a unha por trauma,
                    fiz esmaltaçào em gel e estou apaixonada.
                  </p>
                </div>
              </section>
            )}
            {slide.thirdSlide && (
              <section className={styles.contentSlide}>
                <div>
                  <img
                    src={terceiroSlideImg7}
                    alt="Depoimento Cliente Juliana"
                  />
                  <h3>Juliana</h3>
                  <p>
                    Tinha dificuldades para fazer á unha, depois que conheci a
                    Marina nunca mais tive que procurar outra profissional.
                  </p>
                </div>

                <div>
                  <img
                    src={terceiroSlideImg8}
                    alt="Depoimento Cliente Marcela"
                  />
                  <h3>Marcela</h3>
                  <p>
                    Adoro o Studio, sempre com equipamentos e produtos de
                    qualidade para a realização do trabalho.
                  </p>
                </div>

                <div>
                  <img
                    src={terceiroSlideImg9}
                    alt="Depoimento Cliente Patrícia"
                  />
                  <h3>Patrícia</h3>
                  <p>
                    Faço a manutenção com gel há anos com a Marina, e sempre
                    recomendo para todas minhas amigas.
                  </p>
                </div>
              </section>
            )}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <span onClick={slidePrev}>
          <ArrowLeft />{" "}
        </span>
        <span onClick={slideNext}>
          <ArrowRight />{" "}
        </span>
      </nav>
    </section>
  );
};

export default Slide;
