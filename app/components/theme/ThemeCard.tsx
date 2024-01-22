import React from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/pexels-pierre-blaché-2901215.jpg";
import styles from "./page.module.css";
import { useGetAllAccommodationQuery } from "@/redux/api/accommodation";

type ThemeType = {
  themeCat: any;
};

const ThemeCard = ({ themeCat }: ThemeType) => {
  const { data } = useGetAllAccommodationQuery([]);

  const FilterByTheme = (arg: any) => {
    if (data) {
      const filter = data.filter((item: any) => item.theme.includes(arg));
      return filter;
    }
  };

  const fil = FilterByTheme("Food and Culinary");

  return (
    <Link href={`/${themeCat}`} className={styles.themesCard}>
      <div className={styles.themesCardImageContainer}>
        <Image src={img} alt="popular-image" className={styles.themesImage} />
        <h1 className={styles.tag}>{themeCat}</h1>
        <div className={styles.label}>
          <p>
            Adventure holidays are more than just some time away; they are a
            chance to get behind the scenes of the real world and experience
            places, people and things that are out of the ordinary.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ThemeCard;
