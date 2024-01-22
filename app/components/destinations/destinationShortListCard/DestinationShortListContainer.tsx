import React, { ReactNode } from "react";
import DestinationShortListCard from "./DestinationShortListCard";
import styles from "./page.module.css";
import ViewMoreBtn from "../../utils/viewMoreBtn/ViewMoreBtn";

type ConProps = {
  header?: string;
  genre?: string;
  filteredList?: any;
  themeCategory?: any;
};

const DestinationShortListContainer = ({
  header,
  genre,
  filteredList,
  themeCategory,
}: ConProps) => {
  return (
    <div className={styles.shortlistContainer}>
      <div className={styles.shortlistWrapper}>
        <h2>{`${header} ${genre}`}</h2>
      </div>
      <div className={styles.shortlistWrapper}>
        <div className={styles.shortlistWrapperList}>
          {filteredList?.slice(0, 3).map((item: any) => {
            return (
              <DestinationShortListCard key={item.id} filteredList={item} />
            );
          })}
        </div>

        <ViewMoreBtn href="/" />
      </div>
    </div>
  );
};

export default DestinationShortListContainer;
