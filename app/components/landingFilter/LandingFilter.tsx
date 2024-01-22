import React from "react";
import styles from "./page.module.css";
import FilterBtn from "../utils/filterBtn/FilterBtn";

const LandingFilter = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.wrapper}>
          <FilterBtn text="family" />
          <FilterBtn text="adventure" />
          <FilterBtn text="foodie holiday" />
        </div>
      </main>
    </div>
  );
};

export default LandingFilter;
