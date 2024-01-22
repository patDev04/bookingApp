import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

type CardProps = {
  filteredList?: any;
};

const DestinationShortListCard = ({ filteredList }: CardProps) => {
  const { image, rooms, desc, name } = filteredList;

  return (
    <article className={styles.shortlistCard}>
      <Image
        src={image[0]}
        alt=""
        width={500}
        height={500}
        className={styles.cardImage}
        priority
      />
      <div className={styles.cardContent}>
        <h1>{name}</h1>
        <h2 className={styles.price}>starting from {rooms[0].price}</h2>
        <br />
        <p className="global-text-xs">{desc}</p>
      </div>
    </article>
  );
};

export default DestinationShortListCard;
