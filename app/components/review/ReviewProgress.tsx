import { Progress } from "antd";
import styles from "./page.module.css";
import React from "react";

const ReviewProgress = ({ review_score }: any) => {
  return (
    <div className={styles.progressContainer}>
      {review_score?.map((score: any, idx: number) => (
        <ul key={idx} className={styles.progressWrapper}>
          <li className={styles.progressheading}>{score[0]}</li>
          <Progress
            percent={score[1]}
            status="active"
            strokeColor={{ from: "#731102", to: "#ff3700" }}
          />
        </ul>
      ))}
    </div>
  );
};

export default ReviewProgress;
