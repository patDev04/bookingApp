import React from "react";
import styles from "./page.module.css";
import { Rate } from "antd";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import Image from "next/image";
import { CheckOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import Tag from "../utils/tag/Tag";

type CardProps = {
  details: [] | any;
};

const SearchFilterCard = ({ details }: CardProps) => {
  return (
    <Link href={`/accommodation/${details.id}`}>
      <article className={styles.card}>
        <Image
          src={details.image[0]}
          alt="cardImg"
          width={600}
          height={600}
          className={styles.cardImage}
        />
        <div className={styles.cardInfo}>
          <p className="lightText-s global-text-s">
            {details.property} in {details.country}
          </p>
          <div className={styles.headingContainer}>
            <h1 className="heading-m">{details.name}</h1>
            <div className={styles.rateContainer}>
              <Tag value={details.rating} style={{ marginRight: 10 }} />
              <div className="">
                <p className="global-text-s">Very good</p>
                <p className="light-text">{`${details.reviews.length} reviews`}</p>
              </div>
            </div>
          </div>
          <Rate
            style={{ fontSize: 12 }}
            value={details.star}
            className={styles.rate}
          />
          <div className={styles.night}>
            <BedtimeOutlinedIcon
              fontSize="small"
              className={styles.nightIcon}
            />
            <span className="heading-s">15 night | 26 Sept - 11 Oct 2023 </span>
          </div>
          <p className="heading-xs">{details.property}</p>
          <div className={styles.cancelWrapper}>
            <ul className={styles.cancellation}>
              {details.cancellation
                .slice(0, 2)
                .map((item: any, idx: number) => (
                  <li key={idx} className="global-text-xs">
                    <CheckOutlined
                      style={{
                        marginRight: 5,
                      }}
                    />
                    {item}
                  </li>
                ))}
            </ul>
            <div className={styles.cardPriceContainer}>
              <p className="global-text-xs"> 2 adults, 1 child</p>
              <h1 className={`heading-m ${styles.cardPrice}`}>
                {details.rooms[0].price}
              </h1>
              <button type="button" className={styles.btn}>
                See availability <RightOutlined />{" "}
              </button>
            </div>
          </div>

          {/* <div className={styles.points}>
          <ul className={styles.pointsList}></ul>
         
        </div> */}
        </div>
      </article>
    </Link>
  );
};

export default SearchFilterCard;
