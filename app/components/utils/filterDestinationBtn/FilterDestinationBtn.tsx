import React from "react";
import styles from "./page.module.css";

type filterDestinationBtnProp = {
  text: string;
};

const FilterDestinationBtn = ({ text }: filterDestinationBtnProp) => {
  return (
    <button
      type="button"
      title="filter"
      className={styles.filterDestinationBtn}
    >
      {text}
    </button>
  );
};

export default FilterDestinationBtn;
