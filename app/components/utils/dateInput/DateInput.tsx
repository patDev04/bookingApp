import React, { useState } from "react";
import style from "./page.module.css";
import { DatePicker, Space } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

const { RangePicker } = DatePicker;

const DateInput = () => {
  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };

  return (
    <RangePicker
      format="DD-MM-YYYY"
      onChange={onChange}
      onOk={onOk}
      size="large"
      className={style.picker}
    />
  );
};

export default DateInput;

// <div className={style.dateContainer}>
//   {/* <div className={style.dateBar}>
//     <p className={style.dateLabel}>Check-in</p>
//     <input
//       placeholder="Search where do you want to go"
//       className={style.input}
//       type="date"
//     />
//   </div>
//   <div className={style.dateBar}>
//     <p className={style.dateLabel}>Check-out</p>
//     <input
//       placeholder="Search where do you want to go"
//       className={style.input}
//       type="date"
//     />
//     <div className={style.iconWarapper}></div>
//   </div> */}
// </div>
