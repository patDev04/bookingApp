"use client";
import { useGetAccommodationQuery } from "../../../redux/api/accommodation";
import styles from "./page.module.css";
import Breadcrumb from "@/app/components/utils/breadcomb/Breadcrumb";
import { useState } from "react";
import ItemOverview from "@/app/components/itemPage/itemOverview/ItemOverview";
import ItemImageGallery from "../../components/itemPage/itemImageGallery/ItemImageGallery";
import ItemInfo from "../../components/itemPage/itemInfo/ItemInfo";
import { Card } from "antd";
import ContainerWrap from "@/app/components/utils/containerWrap/ContainerWrap";
import Availability from "@/app/components/availability/Availability";
import Facility from "@/app/components/facility/Facility";
import Reviews from "@/app/components/review/Reviews";

const AccommodationDetails = ({ params }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const id = params.id;
  const { data: accommodation } = useGetAccommodationQuery(id);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <main>
        <section className={styles.itemSection}>
          <Breadcrumb acco={accommodation?.name} />
          <ItemOverview accommodation={accommodation} />
          <ItemImageGallery accommodation={accommodation} />
          <ItemInfo accommodation={accommodation} />
        </section>
        <ContainerWrap section="General information" heading="Description">
          {accommodation?.info}
        </ContainerWrap>
        <Availability accommodation={accommodation} />
        <Facility accommodation={accommodation} />
        <Reviews accommodation={accommodation} />
      </main>
    </div>
  );
};

export default AccommodationDetails;
