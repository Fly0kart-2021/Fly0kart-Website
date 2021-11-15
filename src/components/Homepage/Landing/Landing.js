import React, { useEffect } from "react";
import styles from "./Landing.module.css";
import image from "../images/image.svg";
import image1 from "../images/airplane.png";
import "aos/dist/aos.css";
import Aos from "aos";
const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className={styles.body}>
      <div className={styles.landingContainer}>
        <div className={styles.leftImg} data-aos="fade-down">
          <img src={image} alt=""></img>
        </div>
        <div className={styles.homepageRight} data-aos="fade-down">
          <h1 className={styles.landingText}>
            Flight Booking has a new Destination!
          </h1>

          <h2 className={styles.landingText2}>Book Your 1st Journey With Us</h2>
          <div className={styles.buttons}>
            <button className={styles.bookNowBTN}>Book Now</button>
            <button className={styles.callUsBtn}>Call Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
