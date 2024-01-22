import React from "react";
import style from "./page.module.css";

const GuestInput = () => {
  return (
    <div className={style.dateContainer}>
      <div className={style.dateBar}>
        <p className={style.dateLabel}>Guest</p>
        <input placeholder="Adult" className={style.input} type="number" />
      </div>
      <div className={style.dateBar}>
        <p className={style.dateLabel}>Guest</p>
        <input placeholder="Children" className={style.input} type="number" />
      </div>
    </div>
  );
};

export default GuestInput;
