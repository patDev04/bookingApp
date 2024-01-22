import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

type BtnProp = {
  href?: string;
  onClick?: () => void;
};

const ViewMoreBtn = ({ href }: BtnProp) => {
  return (
    <Link href={href || ""} className={styles.viewMoreBtn}>
      view more
    </Link>
  );
};

export default ViewMoreBtn;
