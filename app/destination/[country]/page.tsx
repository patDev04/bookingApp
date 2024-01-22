"use client";
import React, { useEffect, useState } from "react";
import { useGetCountryQuery } from "@/redux/api/destination";
import Image from "next/image";
import styles from "./page.module.css";
import DestinationShortListContainer from "../../components/destinations/destinationShortListCard/DestinationShortListContainer";
import { useGetAccommodationQuery } from "@/redux/api/accommodation";

const DestinationDetails = ({ params }: any) => {
  const id = params.country;
  const { data } = useGetCountryQuery(id);
  const { data: accommodation } = useGetAccommodationQuery([]);

  const filterFn = () => {
    if (accommodation && id) {
      const filter = accommodation.filter((item: any) => item.country === id);
      return filter;
    }
  };

  // const themeCategory = new Set(
  //   accommodation
  //     ?.map((item: any) => item.theme)
  //     .flatMap((innerArray: any) => innerArray)
  // );

  const filterByThemeFn = (arg: any) => {
    if (accommodation) {
      const filter = accommodation.filter((item: any) => item.theme == arg);
      return filter;
    }
  };

  const filteredList = filterFn();


  if (!data || !data[0]) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.imageContainer}>
        <main>
          <Image
            src={data[0].image[1].pic}
            alt=""
            width={500}
            height={500}
            className={styles.HeaderImage}
            priority
          />
          <div className={styles.car}>
            <div>
              <span className={styles.heading}>{data[0].country} holidays</span>
              <span className={styles.region}>{data[0].region}</span>
            </div>
          </div>
        </main>
      </div>
      <div className={styles.imagesCarousel}>
        {data[0].image.map((img: any, idx: number) => (
          <Image
            key={idx}
            src={img.pic}
            alt=""
            width={1000}
            height={300}
            className={styles.carouselImage}
          />
        ))}
      </div>
      <main>
        <div className={styles.infoContainer}>
          <h1>{data[0].country} holidays</h1>
          <br />
          <p className="global-text-m">{data[0].description}</p>
          <br />
          <ul className={styles.todo}>
            {data[0].fun_things_to_do.map((item: any, idx: number) => {
              return (
                <li key={idx} className={styles.todoList}>
                  <p className="global-text-s">{item.todo}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <DestinationShortListContainer
          header={data[0].country}
          genre="places"
          filteredList={filteredList}
        />
        <DestinationShortListContainer
          header={data[0].country}
          genre="family"
          filteredList={filterByThemeFn("Wildlife and Nature")}
        />

        <DestinationShortListContainer
          header={data[0].country}
          genre="City Breaks"
          filteredList={filterByThemeFn("City Breaks")}
        />
      </main>
    </div>
  );
};

export default DestinationDetails;
