"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import img from "../../../public/pexels-pierre-blaché-2901215.jpg";
import Link from "next/link";
import { EnvironmentOutlined } from "@ant-design/icons";

type propType = {
  destination: any;
};

const Destinations = ({ destination }: propType) => {
  return (
    <section className="section">
      <main>
        <div className="headerWrapper">
          <h1 className="heading_one">Destinations</h1>
          <p className="subHeading_one">
            Fascinating cities - where will you visit?
          </p>
        </div>

        <div className={styles.destinationsContainer}>
          {destination?.slice(0, 8).map((item: any) => {
            const { id, country, image } = item;
            return (
              <Link
                key={id}
                href={`/destination/${country}`}
                className={styles.destinationsCard}
              >
                <div className={styles.imageArea}>
                  <Image
                    src={image[0].pic}
                    alt="popular-image"
                    width={500}
                    height={500}
                    className={styles.destinationsImage}
                  />
                </div>
                <div className={styles.desclabel}>
                  <h1>
                    <EnvironmentOutlined />
                    {country}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default Destinations;
