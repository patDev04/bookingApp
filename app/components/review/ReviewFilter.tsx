import React from "react";
import styles from "./page.module.css";
import { Select } from "antd";

const ReviewFilter = ({ reviews }: any) => {
  // const handleChange = (value: { value: string; label: React.ReactNode }) => {
  //   console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  // };

  const op = [
    {
      value: "jack",
      label: "Jack (100)",
    },
    {
      value: "lucy",
      label: "Lucy (101)",
    },
  ];

  return (
    <div className={styles.filterContainer}>
      <h3>Filter</h3>
      <div className={styles.filterInputCon}>
        <div className={styles.inputGroup}>
          <label htmlFor="reviewer">Reviewers</label>
          <Select
            id="reviewer"
            // labelInValue
            defaultValue={{ value: "All", label: `All (${reviews.length})` }}
            style={{ width: 150 }}
            // onChange={handleChange}
            options={op}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewFilter;
