import React from "react";
import styles from "./page.module.css";
import SearchFilter from "../searchFilter/SearchFilter";
import Image from "next/image";
import landingImg from "../../../public/landing4.jpg";

type ApiProp = {
  accommodation?: [] | any;
};

const Landing = ({ accommodation }: ApiProp) => {
  return (
    <div className={styles.landing}>
      <Image
        className={styles.landingImg}
        src={landingImg}
        alt="landing-img"
        height={1000}
        width={1000}
        priority
      />
      <main className={styles.landingWrapper}>
        <h1 className={styles.landingHeader}>
          ✨Discover Halal-Friendly Escapes
        </h1>
        <h1 className={styles.subHeader}>
          Find the best property according to your specific needs — whether it’s
          a resort with a ladies-only beach, city hotel with halal food, or
          villa with a secluded pool.
        </h1>
        <SearchFilter accommodation={accommodation} />
      </main>
    </div>
  );
};

export default Landing;
