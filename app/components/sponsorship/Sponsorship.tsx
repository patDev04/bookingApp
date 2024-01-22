import React from "react";
import styles from "./page.module.css";
import img1 from "../../../public/Al Jazeera English - jpeg 0.svg";
import img2 from "../../../public/Expedia svg.svg";
import img3 from "../../../public/The Guardian svg.svg";
import Image from "next/image";

const Sponsorship = () => {
  return (
    <main>
      <div className={styles.sponsorship}>
        <Image src={img1} alt="sponsor_logo" className={styles.sponsorLogo} />
        <Image src={img2} alt="sponsor_logo" className={styles.sponsorLogo} />
        <Image src={img3} alt="sponsor_logo" className={styles.sponsorLogo} />
      </div>
    </main>
  );
};

export default Sponsorship;
