import React from "react";
import styles from "./page.module.css";
import ThemeCard from "./ThemeCard";

type ThemeType = {
  theme: any;
};

const Themes = ({ theme }: ThemeType) => {
  const uniqueTheme = Array.from(
    new Set(
      theme?.map((item: any) => item.theme).flatMap((inner: any) => inner)
    )
  );

  return (
    <section className="section">
      <main>
        <div className="headerWrapper">
          <h1 className="heading_one">themes</h1>
          <p className="subHeading_one">
            Experience unforgettable holidays ranging from worldwide tours to
            luxury hotel breaks, city break offers to cruise and much more.
          </p>
        </div>
        <div className={styles.themesContainer}>
          {uniqueTheme?.slice(0, 2).map((item: any, idx: number) => (
            <ThemeCard key={idx} themeCat={item} />
          ))}
        </div>
        <div className={styles.themesContainer}>
          {uniqueTheme?.slice(2, 5).map((item: any, idx: number) => (
            <ThemeCard key={idx} themeCat={item} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Themes;
