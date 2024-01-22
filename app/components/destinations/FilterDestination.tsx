import React from "react";
import FilterDestinationBtn from "./../utils/filterDestinationBtn/FilterDestinationBtn";
import styles from "./page.module.css";

type FilterProps = {
  countries: any;
};

const FilterDestination = ({ countries }: FilterProps) => {
  const filteredCountry = countries?.map((country: any) => {
    return [country.country];
  });

  return (
    <div>
      <section className="section">
        <main>
          <div className={styles.wrapper}>
            {filteredCountry?.map((country: any, idx: number) => (
              <FilterDestinationBtn text={country} key={idx} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default FilterDestination;
