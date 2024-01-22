"use client";
import styles from "./page.module.css";
import theme from "./theme/themeConfig";
import { ConfigProvider } from "antd";
import Landing from "./components/landing/Landing";
import LandingFilter from "./components/landingFilter/LandingFilter";
import Popular from "./components/popular/Popular";
import Destinations from "./components/destinations/Destinations";
import Themes from "./components/theme/Themes";
import Hotpicks from "./components/hotpicks/Hotpicks";
import WhyBanner from "./components/whyBanner/WhyBanner";
import FilterDestination from "./components/destinations/FilterDestination";
import Sponsorship from "./components/sponsorship/Sponsorship";
import { useGetAllDestinationQuery } from "@/redux/api/destination";
import { useGetAllAccommodationQuery } from "@/redux/api/accommodation";

export default function Home() {
  const { data: destination } = useGetAllDestinationQuery({});
  const { data: accommodation } = useGetAllAccommodationQuery({});

  return (
    <ConfigProvider theme={theme}>
      <Landing accommodation={accommodation} />
      {/* <LandingFilter /> */}
      <Popular />
      <Hotpicks accommodation={accommodation} />
      <Destinations destination={destination} />
      <FilterDestination countries={destination} />
      <WhyBanner />
      <Themes theme={accommodation} />
      <Sponsorship />
    </ConfigProvider>
  );
}
