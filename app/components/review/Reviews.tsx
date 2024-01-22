import React, { useState } from "react";
import styles from "./page.module.css";
import ContainerWrap from "../utils/containerWrap/ContainerWrap";
import { Tag } from "antd";
import ReviewDrawer from "./ReviewDrawer";
import ReviewProgress from "./ReviewProgress";

type ReviewProps = {
  accommodation: [] | string | any;
};

const Reviews = ({ accommodation }: ReviewProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const arr = accommodation?.reviews_score[0];
  const review_score = [] as any;
  for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
      review_score.push([key, arr[key]]);
    }
  }

  return (
    <ContainerWrap
      section={`Reviews on ${accommodation?.name}`}
      heading={
        <div className={styles.rateContainer}>
          <Tag
            color="#56cf56"
            style={{ fontSize: 24, marginRight: 0, height: 28, lineHeight: 1 }}
          >
            {accommodation?.rating}
          </Tag>
          <span className={styles.ratetxt}> Very good</span>
          <span
            className={styles.rateCount}
          >{`${accommodation?.reviews?.length} reviews`}</span>
        </div>
      }
    >
      <h4>Categories</h4>
      <br />
      <ReviewProgress review_score={review_score} />
      <button type="button" className={styles.reviewBtn} onClick={showDrawer}>
        review all reviews
      </button>
      <ReviewDrawer
        onClose={onClose}
        open={open}
        review_score={review_score}
        reviews={accommodation?.reviews}
      />
    </ContainerWrap>
  );
};

export default Reviews;
