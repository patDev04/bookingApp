import { PictureOutlined } from "@ant-design/icons";
import React from "react";
import ImagePopupModal from "../../utils/imagePopupModal/ImagePopupModal";
import Image from "next/image";
import styles from "./page.module.css";

const ItemImageGallery = ({
  accommodation,
  showModal,
  handleCancel,
  isModalOpen,
}: any) => {
  return (
    <div className={styles.itemGallery}>
      {accommodation?.image?.slice(0, 7).map((pic: any, idx: number) => {
        return (
          <Image
            key={idx}
            src={pic}
            alt="hotpick_img"
            width={600}
            height={600}
            className={styles.itemImage}
            priority={true}
          />
        );
      })}
      <div className={styles.itemImageBtn} onClick={showModal}>
        <PictureOutlined style={{ fontSize: 34 }} />
        <ImagePopupModal
          key={accommodation?.id}
          details={accommodation}
          showModal={showModal}
          handleCancel={handleCancel}
          imageArray={accommodation?.image}
          classname={styles.itemcat}
          isModalOpen={isModalOpen}
        />
      </div>
      <ul className={styles.itemCategory}>
        <li className={styles.itemCategoryitem}>{accommodation?.property}</li>
        {accommodation?.style?.map((item: any, idx: number) => (
          <li key={idx} className={styles.itemCategoryitem}>
            {item}
          </li>
        ))}
        {accommodation?.theme?.map((item: any, idx: number) => (
          <li key={idx} className={styles.itemCategoryitem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemImageGallery;
