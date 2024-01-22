import React from "react";
import styles from "./page.module.css";
import img from "../../../public/travel-free-design-png 1.svg";
import Image from "next/image";
import { ConfigProvider, Button } from "antd";
import Link from "next/link";

const WhyBanner = () => {
  return (
    <main>
      <div className={styles.whyContainer}>
        <div className={styles.whyWrapper}>
          <div className={styles.whyContent}>
            <h1 className={styles.whyHeader}>WHY BOOK WITH US</h1>
            <h2 className={styles.whysubHeader}>
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className={styles.whytext}>
              Lorem ipsum dolor sit amet consectetur. Est dictum accumsan urna
              ipsum integer lectus iaculis nibh sit.Euismod lorem nibh diam
              sapien pellentesque tellus cras quisque pharetra.
            </p>
          </div>

          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#f24e1e",
                borderRadius: 3,
                fontFamily: "poppins",
                fontSize: 14,
                fontWeightStrong: 900,
                colorText: "lime",
                colorBgTextActive: "red",
              },
            }}
          >
            <Link href={"/"}>
              <Button type="primary">Register</Button>
            </Link>
          </ConfigProvider>
        </div>
        <div className="">
          <Image src={img} alt="travel_png" className={styles.img} />
        </div>
      </div>
    </main>
  );
};

export default WhyBanner;
