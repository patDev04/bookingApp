import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { HiOutlineMap } from "react-icons/hi";
import Image from "next/image";
import map from "../../../../public/map.svg";

const ViewMapBtn = ({ href }: any) => {
  return (
    <div className={styles.mapBackground}>
      <Image src={map} alt="map" className={styles.mapBack} />
      <Link href={href} className={styles.viewMapBtn}>
        <HiOutlineMap className={styles.mapIcon} />
        view map
      </Link>
    </div>
  );
};

export default ViewMapBtn;
