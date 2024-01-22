"use client";
import React, { ReactElement, ReactNode } from "react";
import styles from "./page.module.css";

type ContainerProps = {
  heading?: ReactNode;
  children?: ReactNode | string;
  section: ReactNode;
};

const ContainerWrap = ({ heading, section, children }: ContainerProps) => {
  return (
    <div className="">
      <h1 className="section_heading-l">{section}</h1>
      <div className={styles.containerWrap}>
        <div className={styles.wrapper}>
          <h2 className={styles.containerHeading}>{heading}</h2>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default ContainerWrap;
