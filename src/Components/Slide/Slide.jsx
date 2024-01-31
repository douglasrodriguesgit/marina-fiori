import React from "react";
import styles from "./Slide.module.css";
import ArrowLeft from "../../Assets/icons/arrowLeft.svg?react";
import ArrowRight from "../../Assets/icons/arrowRight.svg?react";

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
            {slide.text}

            
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
