import { EnvironmentOutlined } from "@ant-design/icons";
import { Rate, ConfigProvider, Tag } from "antd";
import React from "react";
import styles from "./page.module.css";
import ViewMoreBtn from "../../utils/viewMoreBtn/ViewMoreBtn";

const ItemOverview = ({ accommodation }: any) => {
  return (
    <div className={styles.rateWrapper}>
      <div className={styles.rateContainer}>
        <div className="">
          <h1 className={styles.itemHeader}>{accommodation?.name}</h1>
          <div className={styles.rateContainer}>
            <Rate
              style={{ fontSize: 16, marginRight: 10 }}
              value={accommodation?.rating}
            />
            <span className="global-text-m">
              {`${accommodation?.property}'s' in  ${accommodation?.city}, ${accommodation?.country}`}
              <EnvironmentOutlined style={{ marginLeft: 5, fontSize: 5 }} />
            </span>
          </div>
        </div>
        <div className={styles.rateViewBox}>
          <div className={styles.rateViewBoxInner}>
            <span className={styles.rateText}>Very good</span>
            <ConfigProvider
              theme={{
                token: {
                  fontSize: 20,
                },
              }}
            >
              <Tag color="#56cf56" style={{ fontSize: 20, marginRight: 0 }}>
                {accommodation?.rating}
              </Tag>
            </ConfigProvider>
          </div>
          <ViewMoreBtn href={"/"} />
        </div>
      </div>
      <p className="global-text-m">{accommodation?.desc}</p>
    </div>
  );
};

export default ItemOverview;
