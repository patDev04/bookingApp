import React from "react";
import styles from "./page.module.css";
import { CompassOutlined } from "@ant-design/icons/lib/icons";
import ViewMoreBtn from "../../utils/viewMoreBtn/ViewMoreBtn";
import ViewMapBtn from "../../utils/viewMapBtn/ViewMapBtn";

const ItemInfo = ({ accommodation }: any) => {
  const inforArr = accommodation?.service[0].general.slice(0, 5);

  return (
    <div className={styles.ItemInfo}>
      <div className={styles.ItemInfoCol}>
        <h1 className={styles.InfoHeader}>Information and facilities</h1>
        <ul className={styles.shortListFacOne}>
          {inforArr?.map((item: any, idx: number) => {
            return (
              <li key={idx} className={styles.shortListFacList}>
                {item}
              </li>
            );
          })}
          <li className={styles.shortListFacList}>
            <ViewMoreBtn href={"/"} />
          </li>
        </ul>
      </div>
      <div className={styles.ItemInfoCol}>
        <h1 className={styles.InfoHeader}>Location</h1>
        <ul className={styles.shortListFac}>
          <li className={styles.shortListFacList}>{accommodation?.location}</li>
          <li className={styles.shortListFacList}>{accommodation?.address}</li>
          <li className={styles.shortListFacList}>{accommodation?.city}</li>
        </ul>
        <h1 className={styles.InfoHeader}>Closeset Airports</h1>

        <div className={styles.shortListFac}>
          <div className={styles.shortListFacList}>
            {accommodation?.airport?.map((item: any, idx: number) => {
              return (
                <ul key={idx}>
                  {!Object.entries(item) ? null : (
                    <li className={styles.shortListFacList}>
                      <span />
                      {` ${item.name} (${item.code})`}
                    </li>
                  )}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.ItemInfoCol}>
        <ViewMapBtn href={"/"} />
      </div>
    </div>
  );
};

export default ItemInfo;
