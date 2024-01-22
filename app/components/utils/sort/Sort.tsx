"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FilterOutlined } from "@ant-design/icons";

const Sort = () => {
  const [activeButton, setActiveButton] = useState("recommended");

  const handleButtonClick = (id: any) => {
    setActiveButton(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconCon}>
        <FilterOutlined className={styles.sortIcon} />
      </div>
      <button
        type="button"
        name="recommended"
        className={activeButton === "recommended" ? styles.active : styles.btn}
        onClick={(e) => handleButtonClick(e.currentTarget.name)}
      >
        Recommended
      </button>
      <button
        type="button"
        name="price"
        className={activeButton === "price" ? styles.active : styles.btn}
        onClick={(e) => handleButtonClick(e.currentTarget.name)}
      >
        Price (lowest)
      </button>
      <button
        type="button"
        name="rated"
        className={activeButton === "rated" ? styles.active : styles.btn}
        onClick={(e) => handleButtonClick(e.currentTarget.name)}
      >
        Top rated
      </button>
      <button
        type="button"
        name="stars"
        className={activeButton === "stars" ? styles.active : styles.btn}
        onClick={(e) => handleButtonClick(e.currentTarget.name)}
      >
        Stars
      </button>
    </div>
  );
};

export default Sort;
