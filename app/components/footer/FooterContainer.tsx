import React from "react";
import styles from "./page.module.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import logo from "../../../public/footerlogo.svg";

// type Props = {
//   data: any;
//   idx: number;
// };

const FooterContainer = () => {
  // const region = new Set();
  // const filteredRegion = data.filter((item: any) => {
  //   if (!region.has(item.region)) {
  //     region.add(item.region);
  //     return true;
  //   } else return false;
  // });

  return (
    <footer className={styles.footer}>
      <main>
        <div className={styles.footerWrapper}>
          <ul className={styles.footerList}>
            <h2>Destinations</h2>
            <br />
            {/* {filteredRegion?.map((item: any, idx: number) => {
              return (
                <li key={idx} className={styles.footerLink}>
                  {item.region}
                </li>
              );
            })} */}
          </ul>
          <ul className={styles.footerList}>
            <h2>Themes</h2>
            <br />
            {/* {filteredRegion?.map((item: any, idx: number) => {
              return (
                <li key={idx} className={styles.footerLink}>
                  {item.region}
                </li>
              );
            })} */}
          </ul>
          <ul className={styles.footerList}>
            <h2>About Us</h2>
            <br />
            {/* {filteredRegion?.map((item: any, idx: number) => {
              return (
                <li key={idx} className={styles.footerLink}>
                  {item.region}
                </li>
              );
            })} */}
          </ul>
          <ul className={styles.footerList}>
            <h2>Support and useful information</h2>
            <br />
            {/* {filteredRegion?.map((item: any, idx: number) => {
              return (
                <li key={idx} className={styles.footerLink}>
                  {item.region}
                </li>
              );
            })} */}
          </ul>
        </div>
        <div className={styles.footerSocials}>
          <p>Follows us: @destination | @destination</p>
          <div className={styles.footerIconContainer}>
            <InstagramOutlined className={styles.footerIcon} />
            <FacebookOutlined className={styles.footerIcon} />
            <TwitterOutlined className={styles.footerIcon} />
          </div>
        </div>
        <div className={styles.copywrite}>
          <p>Copyright © 1996–2023 HalalTravels.com™. All rights reserved</p>
          <Image src={logo} alt="footer_logo" className={styles.footerLogo} />
        </div>
      </main>
    </footer>
  );
};

export default FooterContainer;
