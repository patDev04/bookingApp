"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { EnvironmentOutlined } from "@ant-design/icons";

type imageProp = {
  pic: any;
};

const PopularCard = ({ pic }: imageProp) => {
  return (
    <div>
      <Link href={"/"}>
        <div className={styles.popularCard}>
          <Image
            src={pic}
            alt="popular-image"
            className={styles.popularImage}
          />

          <div className={styles.label}>
            <h1>
              <EnvironmentOutlined />
              London
            </h1>
          </div>
        </div>
        <div className={styles.popularCardInfo}>
          <h1 className={styles.popularCardheader}>Halal-friendly wellness</h1>
          <p className={styles.popularCardsubheader}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias,
            accusantium eos aperiam blanditiis error at illo.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PopularCard;
