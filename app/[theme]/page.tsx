"use client";
import React from "react";
import { useGetAllAccommodationQuery } from "@/redux/api/accommodation";
import SearchFilter from "../components/searchFilter/SearchFilter";
import Breadcrumb from "../components/utils/breadcomb/Breadcrumb";
import Sort from "../components/utils/sort/Sort";
import SearchFilterCard from "../components/searchFilter/SearchFilterCard";
import styles from "./page.module.css";
import ViewMapBtn from "../components/utils/viewMapBtn/ViewMapBtn";
import ResultFilter from "../components/resultFilter/ResultFilter";
import SearchFilterContainer from "../components/searchFilter/SearchFilterContainer";
const SearchResult = () => {
  const { data } = useGetAllAccommodationQuery([]);

  return (
    <div>
      <main>
        <Breadcrumb />
        <div className={styles.container}>
          <SearchFilterContainer accommodation={data} />
          {/* <div className={styles.filtercontainer}>
            <ViewMapBtn href="" />
            <br />
            <br />
            <ResultFilter accommodation={data} />
            <br />
            <br />
          </div>
          <div className={styles.resultcontainer}>
            <div className="heading-m">London: 10,194 properties found</div>
            <Sort />
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default SearchResult;
