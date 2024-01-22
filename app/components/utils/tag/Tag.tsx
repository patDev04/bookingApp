import React, { ReactNode } from "react";
import styles from "./page.module.css";

type TagProp = {
  value: string | number | any;
  style?: ReactNode | any;
};

const Tag = ({ value, style }: TagProp) => {
  return (
    <div className={styles.tag} style={style}>
      <p>{value}</p>
    </div>
  );
};

export default Tag;
