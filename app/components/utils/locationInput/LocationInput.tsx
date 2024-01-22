import React, { useState } from "react";
import style from "./page.module.css";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import type { SelectProps } from "antd";

type SearchBarProps = {
  data?: any;
};

const LocationInput = ({ data }: SearchBarProps) => {
  // const [filterSearch, setFilterSearch] = useState([]);
  // const [wordEmtered, setWordEntered] = useState<string>("");
  // useState<SelectProps["options"]>([]);
  const [value, setValue] = useState<string>();

  const filterCountries = data?.map((item: any) => {
    return { country: item.country };
  });

  // const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchLocation = e.target.value;
  //   setWordEntered(searchLocation);
  //   const newFilter = filterCountries.filter((item: any) => {
  //     return item.country.toLowerCase().includes(searchLocation.toLowerCase());
  //   }) as any;

  //   if (searchLocation === "") {
  //     setFilterSearch([]);
  //   } else {
  //     setFilterSearch(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilterSearch([]);
  //   setWordEntered("");
  //   console.log("clear");
  // };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <div>
      <Select
        showSearch
        value={value}
        placeholder="Location"
        style={{ width: "100%", height: "100%" }}
        defaultActiveFirstOption={false}
        suffixIcon={null}
        filterOption={false}
        // onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        options={(filterCountries || []).map((d: any, idx: number) => ({
          value: idx,
          label: d.country,
        }))}
      />
      {/* <div className={style.locationBar}>
        <p className={style.locationLabel}>Location</p>
        <input
          placeholder="Search where do you want to go"
          className={style.input}
          value={wordEmtered}
          onChange={handleFilter}
          type="text"
        />
        <div className={style.iconWarapper}>
          {filterSearch.length === 0 ? (
            <SearchOutlined className={style.searchIcon} />
          ) : (
            <CloseCircleOutlined
              className={style.closeIcon}
              onClick={clearInput}
            />
          )}
        </div>
      </div>

      {filterSearch.length !== 0 && (
        <ul className={style.result}>
          {filterSearch?.map((item: any, idx: number) => {
            return (
              <li key={idx} className={style.list}>
                <p className={`${style.list} global-text-m`}>{item.country}</p>
              </li>
            );
          })}
        </ul>
      )} */}
    </div>
  );
};

export default LocationInput;
