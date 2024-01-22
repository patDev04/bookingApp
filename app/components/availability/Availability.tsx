import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import RoomPopupModal from "../utils/roomPopupModal/RoomPopupModal";

const Availability = ({ accommodation }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingCon}>
        <h1 className="section_heading-l">Availability</h1>
        <span className={styles.headingSubtitle}>Select room</span>
      </div>
      <div className={styles.wrapper}>
        {accommodation?.rooms?.map((item: any) => {
          return (
            <article key={item.id} className={styles.card}>
              <Image
                src={item?.pics[0]}
                alt="card-img"
                width={600}
                height={600}
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <div className={styles.cardWrapper}>
                  <div className={styles.topLine}>
                    <h1>{item.type}</h1>
                    <h3 className={styles.view}>{item.view}</h3>
                  </div>
                  <ul className={styles.list}>
                    <li>{item.bedrooms} bedrooms</li>
                    <li>{item.bed}</li>
                  </ul>
                  <ul className={styles.list}>
                    <li>{item.cancellation[0]}</li>
                  </ul>
                </div>
                <div className="">
                  <h1 className={styles.price}>{item.price}</h1>
                  <div className={styles.btnContainer}>
                    <p
                      className={styles.details}
                      onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                      details
                    </p>
                    <RoomPopupModal
                      showModal={showModal}
                      handleOk={handleOk}
                      handleCancel={handleCancel}
                      isModalOpen={isModalOpen}
                      footer={false}
                      accommodation={item}
                    />
                    <Link href={"/"} className={styles.cardBtn}>
                      continue
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Availability;
