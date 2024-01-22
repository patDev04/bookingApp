import React from "react";
import styles from "./page.module.css";
import PopularCard from "./PopularCard";
import img1 from "../../../public/photo-1.webp";
import img2 from "../../../public/photo.webp";
import img3 from "../../../public/photos.webp";

const images = [{ pic: img1 }, { pic: img2 }, { pic: img3 }];

const Popular = () => {
  return (
    <div>
      <section className="section">
        <main>
          <div className="headerWrapper">
            <h1 className="heading_one">Popular Destination</h1>
            <p className="subHeading_one">
              Discover unique holiday experiences
            </p>
          </div>

          <div className={styles.popularImagesContainer}>
            {images.map((pic: any, idx: number) => (
              <PopularCard key={idx} pic={pic.pic} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default Popular;
