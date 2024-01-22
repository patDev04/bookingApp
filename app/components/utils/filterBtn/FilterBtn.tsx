import React from "react";
import styles from "./page.module.css";

type filterBtnProp = {
  text: string;
};

const FilterBtn = ({ text }: filterBtnProp) => {
  return (
    <button type="button" title="filter" className={styles.filterBtn}>
      {text}
    </button>
  );
};

export default FilterBtn;
