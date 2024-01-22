import React, { useState } from "react";
import ContainerWrap from "../utils/containerWrap/ContainerWrap";
import { CheckOutlined } from "@ant-design/icons";
import styles from "./page.module.css";
import ViewMoreBtn from "../utils/viewMoreBtn/ViewMoreBtn";

const Facility = ({ accommodation }: any) => {
  const [viewMore, setViewMore] = useState<Boolean>(false);
  return (
    <div className="">
      <h1 className="section_heading-l">facilities</h1>
      <div className={styles.facContainerWrap}>
        <div className={styles.wrapper}>
          <h2 className={styles.containerHeading}>most popular</h2>
        </div>

        <div className={!viewMore ? `${styles.content}` : `${styles.active}`}>
          <div className={styles.facContainer}>
            <div className={styles.facWrapper}>
              <h4>Parking</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.parking?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>internet</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.internet?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>health</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.health?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>lobby</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.lobby?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>restaurant</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.restaurant?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>spa</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.spa?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>media</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.media?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>business</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.business?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>medical</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.medical?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>cleaning</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.cleaning?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>business</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.business?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>children</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.children?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>activities</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.activities?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>safety</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.safety?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>safety</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.safety?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>outdoor</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.outdoor?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>spaces</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.spaces?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>meal</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.meal?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>view</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.view?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.facWrapper}>
              <h4>general</h4>
              <ul className={styles.facItems}>
                {accommodation?.service[0]?.general?.map(
                  (item: any, idx: number) => (
                    <li key={idx} className={styles.facList}>
                      <CheckOutlined className={styles.check} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button
            type="button"
            className={styles.facBtn}
            onClick={() => setViewMore(!viewMore)}
          >
            {!viewMore ? "view more" : "View less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Facility;
