import React, { ReactNode, useState } from "react";
import styles from "./page.module.css";
import { CaretDownOutlined } from "@ant-design/icons";

type AccordionProp = {
  title?: string;
  children?: ReactNode;
};

const Accordion = ({ title, children }: AccordionProp) => {
  const [isVisble, setIsVisible] = useState(false);

  const toggleAccordion = () => {
    setIsVisible(!isVisble);
  };

  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.item} ${isVisble ? styles.active : ""}`}
        onClick={toggleAccordion}
      >
        <p className="heading-s">{title}</p>
        <CaretDownOutlined className={isVisble ? `${styles.up}` : ""} />
      </div>

      <div className={`${styles.content} ${isVisble ? styles.visible : ""}`}>
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
