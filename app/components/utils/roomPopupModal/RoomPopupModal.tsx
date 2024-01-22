import React from "react";
import { Modal } from "antd";
import styles from "./page.module.css";
import { CheckOutlined } from "@ant-design/icons";
import { Image } from "antd";

const RoomPopupModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  accommodation,
}: any) => {
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      footer={null}
      className={styles.modal}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.picWrapper}>
            {accommodation?.pics?.map((image: any, idx: number) => {
              return (
                <Image
                  key={idx}
                  src={image}
                  alt="card-gallery"
                  width={170}
                  className={styles.image}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.wrapperInfo}>
          <h1>{accommodation?.type}</h1>
          <br />
          <ul className={styles.shortList}>
            <li className={styles.shortListList}>
              <h4>bedrooms:</h4>
              <span className={styles.shortListSpan}>
                {accommodation?.bedrooms}
              </span>
            </li>
            <li className={styles.shortListList}>
              <h4>Bed:</h4>
              <span className={styles.shortListSpan}>{accommodation?.bed}</span>
            </li>
            <li className={styles.shortListList}>
              <h4>View:</h4>
              <span className={styles.shortListSpan}>
                {accommodation?.view}
              </span>
            </li>
            <li className={styles.shortListList}>
              <h4>meal:</h4>
              <span className={styles.shortListSpan}>
                {accommodation?.meal[0]}
              </span>
            </li>
          </ul>
          <p>{accommodation?.desc}</p>
          <br />

          <h4>furniture in your room</h4>
          <ul className={styles.furniturWrapper}>
            {accommodation?.facilities[0].furniture?.map(
              (item: any, idx: number) => (
                <li className={styles.furniture} key={idx}>
                  <CheckOutlined className={styles.tick} /> {item}
                </li>
              )
            )}
          </ul>

          <br />
          <h4>Room facilities:</h4>
          <div className={styles.facilitiesWrapper}>
            <div className={styles.listWrapper}>
              <h4>bathroom</h4>
              <ul className={styles.list}>
                {accommodation?.facilities[0].bathroom?.map(
                  (item: any, idx: number) => (
                    <li key={idx}>
                      <CheckOutlined className={styles.tick} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.listWrapper}>
              <h4>bedroom</h4>
              <ul className={styles.list}>
                {accommodation?.facilities[0].bedroom?.map(
                  (item: any, idx: number) => (
                    <li key={idx}>
                      <CheckOutlined className={styles.tick} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.listWrapper}>
              <h4>media</h4>
              <ul className={styles.list}>
                {accommodation?.facilities[0].media?.map(
                  (item: any, idx: number) => (
                    <li key={idx}>
                      <CheckOutlined className={styles.tick} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.listWrapper}>
              <h4>kitchen</h4>
              <ul className={styles.list}>
                {accommodation?.facilities[0].kitchen?.map(
                  (item: any, idx: number) => (
                    <li key={idx}>
                      <CheckOutlined className={styles.tick} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.listWrapper}>
              <h4>other</h4>
              <ul className={styles.list}>
                {accommodation?.facilities[0].other?.map(
                  (item: any, idx: number) => (
                    <li key={idx}>
                      <CheckOutlined className={styles.tick} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RoomPopupModal;
