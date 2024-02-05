import React from "react";
import styles from "./Slide.module.css";
import ArrowLeft from "../../Assets/icons/arrowLeft.svg?react";
import ArrowRight from "../../Assets/icons/arrowRight.svg?react";
import primeiroSlide1 from "../../Assets/image/portfolio/left/slide1-left.jpg";
import primeiroSlide2 from "../../Assets/image/portfolio/left/slide1-1.jpg";
import primeiroSlide4 from "../../Assets/image/portfolio/left/slide1-4.jpg";
import primeiroSlide3 from "../../Assets/image/portfolio/left/slide1-2.jpg";
import primeiroSlide5 from "../../Assets/image/portfolio/left/slide1-right.jpg";
import primeiroSlide6 from "../../Assets/image/portfolio/left/slide1-3.jpg";
import segundoSlide1 from "../../Assets/image/portfolio/center/portfolio-1.jpg";
import segundoSlide2 from "../../Assets/image/portfolio/center/portfolio-2.jpg";
import segundoSlide3 from "../../Assets/image/portfolio/center/portfolio-3.jpg";
import segundoSlide4 from "../../Assets/image/portfolio/center/portfolio-4.jpg";
import segundoSlide5 from "../../Assets/image/portfolio/center/portfolio-5.jpg";
import segundoSlide6 from "../../Assets/image/portfolio/center/portfolio-6.jpg";
import terceiroSlide1 from "../../Assets/image/portfolio/right/slide3-1.jpg";
import terceiroSlide2 from "../../Assets/image/portfolio/right/slide3-2.jpg";
import terceiroSlide3 from "../../Assets/image/portfolio/right/slide3-3.jpg";
import terceiroSlide4 from "../../Assets/image/portfolio/right/slide3-4.jpg";
import terceiroSlide5 from "../../Assets/image/portfolio/right/slide3-5.jpg";
import terceiroSlide6 from "../../Assets/image/portfolio/right/slide3-6.jpg";

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
                <span>
                  <img src={primeiroSlide5} alt="" />
                  <img src={primeiroSlide3} alt="" />
                </span>
                <span>
                  <img src={primeiroSlide2} alt="" />
                  <img src={primeiroSlide1} alt="" />
                </span>{" "}
                <span>
                  <img src={primeiroSlide4} alt="" />
                  <img src={primeiroSlide6} alt="" />
                </span>
              </section>
            )}
            {slide.secondSlide && (
              <section className={styles.contentSlide}>
                <span>
                  <img src={segundoSlide1} alt="" />
                  <img src={segundoSlide6} alt="" />
                </span>
                <span>
                  <img src={segundoSlide2} alt="" />
                  <img src={segundoSlide5} alt="" />
                </span>{" "}
                <span>
                  <img src={segundoSlide3} alt="" />
                  <img src={segundoSlide4} alt="" />
                </span>
              </section>
            )}
            {slide.thirdSlide && (
              <section className={styles.contentSlide}>
                <span>
                  <img src={terceiroSlide1} alt="" />
                  <img src={terceiroSlide2} alt="" />
                </span>
                <span>
                  <img src={terceiroSlide3} alt="" />
                  <img src={terceiroSlide4} alt="" />
                </span>{" "}
                <span>
                  <img src={terceiroSlide5} alt="" />
                  <img src={terceiroSlide6} alt="" />
                </span>
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
