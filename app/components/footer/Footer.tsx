"use client";
import React, { useEffect } from "react";
import FooterContainer from "./FooterContainer";
import { fetchAccommodationApi } from "@/redux/slice/accommodationSlice";
import { fetchData } from "@/redux/slice/dataSlice";
// import { RootState, AppDispatch } from "@/redux/store";
// import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
  // const { data, isLoading } = useSelector((state: RootState) => state.data);
  // const { accommodationApi } = useSelector(
  //   (state: RootState) => state.accommodationApi
  // );

  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchData());
  //   dispatch(fetchAccommodationApi());
  // }, []);
  return <FooterContainer />;
};

export default Footer;
