import React from "react";
import styles from "./page.module.css";
import HotpickCard from "./HotpickCard";

type CardProp = {
  accommodation: any;
};

const Hotpicks = ({ accommodation }: CardProp) => {

  return (
    <div>
      <section className="section">
        <main>
          <div className="headerWrapper">
            <h1 className="heading_one">hot picks</h1>
            <p className="subHeading_one">
              Our favourite hand-picked properties.
            </p>
          </div>

          <div className={styles.hotpickContainer}>
            {accommodation?.slice(0, 8).map((item: any) => (
              <HotpickCard key={item.id} accommodation={item} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default Hotpicks;
