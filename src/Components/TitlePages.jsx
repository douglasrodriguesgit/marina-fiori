import React from "react";
import styles from './TitlePages.module.css'

const TitlePages = (props) => {
  return <h1 className={`${"title"} ${styles.titlePages}`}>{props.text}</h1>;
};

export default TitlePages;
