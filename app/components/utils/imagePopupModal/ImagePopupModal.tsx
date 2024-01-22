import React from "react";
import { Image, Modal, Rate } from "antd";
import styles from "./page.module.css";

const imagePopupModal = ({
  details,
  isModalOpen,
  handleCancel,
  imageArray,
}: any) => {
  return (
    <Modal
      title={
        <h3>
          {details?.name}
          <Rate
            style={{ fontSize: 12, marginLeft: 10 }}
            value={details?.rating}
          />
        </h3>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      width={1400}
      footer={false}
      className={styles.popup}
    >
      <div className={styles.popImageContainer}>
        {imageArray?.map((pic: any, idx: number) => {
          return (
            <Image
              key={idx}
              src={pic.pic}
              alt="any"
              className={styles.popupImage}
            />
          );
        })}
      </div>
    </Modal>
  );
};

export default imagePopupModal;
