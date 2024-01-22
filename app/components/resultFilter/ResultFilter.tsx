import React, { useState } from "react";
import styles from "./page.module.css";
import Accordion from "../utils/accordion/Accordion";
import { Rate } from "antd";

type FilterProp = {
  accommodation?: any;
};

const ResultFilter = ({ accommodation }: FilterProp) => {
  // const [value, setValue] = useState(1);

  // const onChange = (e: RadioChangeEvent) => {
  //   console.log("radio checked", e.target.value);
  //   setValue(e.target.value);
  // };

  const propertyType = Array.from(
    new Set(
      accommodation
        ?.map((item: any) => item.property)
        .filter((item: any) => item !== "")
    )
  );

  const propertyStyle = Array.from(
    new Set(
      accommodation
        ?.map((item: any) => item.style)
        .flat()
        .filter((item: any) => item !== "")
    )
  ) as any;

  const getLength = (arg: any, type: any) => {
    return accommodation?.filter((item: any) => item?.[type].includes(arg))
      .length;
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.container}>
      <Accordion title="Property type">
        {propertyType?.map((item: any, idx: number) => {
          return (
            <div className={styles.inputGroup} key={idx}>
              {!item ? null : (
                <label htmlFor={item} className="global-text-s">
                  {item}
                </label>
              )}
              <div className={styles.radioCon}>
                <span className={`${styles.length} lightText-s`}>
                  {getLength(item, "property")}
                </span>
                {!item ? null : (
                  <input
                    type="checkbox"
                    className={styles.radio}
                    placeholder={item}
                    id={item}
                  />
                )}
              </div>
            </div>
          );
        })}
      </Accordion>
      <Accordion title="stars">
        {stars.reverse().map((star: any, idx: number) => (
          <div className={styles.starContainer} key={idx}>
            <Rate value={star} style={{ fontSize: 12 }}></Rate>
            {/* <span className={`${styles.length} lightText-s`}>
                  {getLength(item, "property")}
                </span> */}
            <input type="radio" className={styles.radio} placeholder={star} />
          </div>
        ))}
      </Accordion>
      <Accordion title="property style">
        <ul>
          {propertyStyle?.map((item: any, idx: number) => (
            <li key={idx} className={`${styles.inputGroup} global-text-s`}>
              {item}
              <span className={`${styles.length} lightText-s`}>
                {getLength(item, "style")}
              </span>
            </li>
          ))}
        </ul>
      </Accordion>
      <Accordion title="location"></Accordion>
      <Accordion title="review"></Accordion>
      <Accordion title="halal food"></Accordion>
      <Accordion title="budget"></Accordion>
      <Accordion title="leisure"></Accordion>
      <Accordion title="budget"></Accordion>
      <Accordion title="meal plan"></Accordion>
    </div>
  );
};

export default ResultFilter;
