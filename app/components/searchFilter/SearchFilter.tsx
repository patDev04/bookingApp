"use client";

import React from "react";
import styles from "./page.module.css";
import LocationInput from "../utils/locationInput/LocationInput";
import Date from "../utils/dateInput/DateInput";
import GuestInput from "./../utils/guestInput/GuestInput";
import { SearchOutlined } from "@ant-design/icons";

type ApiProp = {
  accommodation?: [] | any;
};

const SearchFilter = ({ accommodation }: ApiProp) => {
  return (
    <form className={styles.searchFilter}>
      <div className={styles.InputContainer}>
        <LocationInput data={accommodation} />
        <Date />
        <GuestInput />
        <button type="submit" className={styles.seachButton}>
          {<SearchOutlined className={styles.searchIcon} />}
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;
