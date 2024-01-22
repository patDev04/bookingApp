"use client";
import React, { useState } from "react";
import logo from "../../../public/logo1.svg";
import Image from "next/image";
import styles from "./page.module.css";
import { GlobalOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Tooltip, Modal } from "antd";
import Link from "next/link";
import FilterBtn from "./../utils/filterBtn/FilterBtn";

const Navbar = () => {
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const showModal = () => {
    setIsCurrencyModalOpen(true);
    setIsLangModalOpen(true);
  };

  const handleCancel = () => {
    setIsCurrencyModalOpen(false);
    setIsLangModalOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <main>
        <div className={styles.navWrapper}>
          <Link href={"/"}>
            <Image className={styles.logo} src={logo} alt="img" />
          </Link>
          <Modal
            title="Select your currency"
            open={isCurrencyModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <p>Some contents...</p>
          </Modal>
          <Modal
            title="Select your country"
            open={isLangModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          <div className={styles.navItems}>
            <div className={styles.info}>
              <Tooltip title="Select your currency" color="black" arrow={false}>
                <div className={styles.navItem} onClick={showModal}>
                  <span className={styles.currency}>GBP</span>
                </div>
              </Tooltip>
              <Tooltip title="Select your language" color="black" arrow={false}>
                <div className={styles.navItem} onClick={showModal}>
                  <span>
                    <GlobalOutlined className={styles.languageIcon} />
                  </span>
                </div>
              </Tooltip>
            </div>
            <div className={styles.navBtns}>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "white",
                    borderRadius: 3,
                    fontFamily: "poppins",
                    fontSize: 13,
                    fontWeightStrong: 900,
                    colorText: "lime",
                    colorBgTextActive: "red",
                  },
                }}
              >
                <Link href={"/signIn"}>
                  <Button type="primary">Sign in</Button>
                </Link>
                <Link href={"/register"}>
                  <Button type="primary">Register</Button>
                </Link>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.navSmall}>
        <main>
          <FilterBtn text="family" />
          <FilterBtn text="Adventure" />
          <FilterBtn text="foodie" />
        </main>
      </div>
    </nav>
  );
};

export default Navbar;
