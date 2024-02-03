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

const Slide = ({ slides }) => {
  const [slideActive, setSlideActive] = React.useState(0);
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
                <span className={styles.column1}>
                  <img src={primeiroSlide1} alt="" />{" "}
                </span>
                <span className={styles.column2}>
                  {" "}
                  <img src={primeiroSlide2} alt="" />
                  <img src={primeiroSlide3} alt="" />
                  <img src={primeiroSlide4} alt="" />
                  <img src={primeiroSlide6} alt="" />
                </span>
                <span lassName={styles.column3}>
                  <img src={primeiroSlide5} alt="" />
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
