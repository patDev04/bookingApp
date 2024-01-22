import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { RightOutlined } from "@ant-design/icons";

type TBreadCrumbProps = {
  acco?: string;
};

const Breadcrumb = ({ acco }: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className={styles.breadcrumbWrapper}>
      <div className={styles.breadcrumb}>
        <Link href={"/"} className={styles.breadcrumbLink}>
          Home
        </Link>
        {pathNames.length > 0 && (
          <RightOutlined className={styles.chevronRight} />
        )}
        {pathNames?.map((link: string, idx: number) => {
          let href = `/${pathNames.slice(0, 1)}`;
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);

          return (
            <React.Fragment key={idx}>
              <div className={styles.breadcrumb}>
                <Link href={href} className={styles.breadcrumbLink}>
                  {itemLink}
                </Link>
              </div>
              {pathNames.length !== idx + 1 && (
                <RightOutlined className={styles.chevronRight} />
              )}
            </React.Fragment>
          );
        })}
        {pathNames.length < 1 && (
          <RightOutlined className={styles.chevronRight} />
        )}
        <p className={styles.currentLocation}>{JSON.stringify(acco)}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
