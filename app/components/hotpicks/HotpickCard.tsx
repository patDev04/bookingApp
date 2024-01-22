"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Rate, Tag } from "antd";
import Link from "next/link";

interface CardProp {
  accommodation: any;
}

const HotpickCard = ({ accommodation }: CardProp) => {
  const { city, country, name, rating, rooms, image, id } = accommodation;

  return (
    <Link href={`/accommodation/${id}`} className={styles.hotpickCard}>
      <Image
        src={image[0]}
        alt="hotpick_img"
        className={styles.hotpickCardImage}
        width={400}
        height={400}
      />
      <div className={styles.hotpickCardInfo}>
        <h2 className={styles.header}>{name}</h2>
        <span className={styles.hotpickCardIcon}>
          <EnvironmentOutlined />
        </span>
        <span className={styles.hotpickCardLocation}>
          {city}, {country}
        </span>
        <div className={styles.hotpickCardRate}>
          <div className={styles.hotpickCardTag}>
            <Tag color="#f24e1e">{rating}</Tag> <span>Very good</span>
          </div>
          <Rate style={{ fontSize: 12 }} value={rating} />
        </div>
        <h1 className={styles.hotpickCardPrice}>
          <span className={styles.hotpickCardpp}>Starting from</span>
          {rooms[0]?.price}
          <span className={styles.hotpickCardpp}>pp</span>
        </h1>
      </div>
    </Link>
  );
};

export default HotpickCard;
