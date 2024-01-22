import React from "react";
import styles from "./page.module.css";
import { Button, Drawer, Space } from "antd";
import ReviewProgress from "./ReviewProgress";
import ReviewFilter from "./ReviewFilter";
import ReviewMessages from "./ReviewMessages";

type DrawerProps = {
  onClose: () => void;
  open: boolean;
  review_score: any;
  reviews: any;
};

const ReviewDrawer = ({
  onClose,
  open,
  review_score,
  reviews,
}: DrawerProps) => {
  return (
    <Drawer
      title="Create a new account"
      width={1020}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button>Cancel</Button>
        </Space>
      }
    >
      <ReviewProgress review_score={review_score} />
      <ReviewFilter reviews={reviews} />
      <ReviewMessages reviews={reviews} />
    </Drawer>
  );
};

export default ReviewDrawer;
