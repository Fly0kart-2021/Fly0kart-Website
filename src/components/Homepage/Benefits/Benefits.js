import React, { useEffect } from "react";
import styles from "./Benefits.module.css";
import { FaPlaneDeparture } from "react-icons/fa";
import aos from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

const Benefits = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className={styles.maincontainer} data-aos="fade-up">
      <h1 className={styles.heading} data-aos="fade-up">
        BOOK WITH US AND ENJOY THE BENIFITS
      </h1>
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.content}>
          <h5>
            <FaPlaneDeparture className={styles.planeicon} />
          </h5>
          <p>
            Secure and IATA certified A1-based online ticket booking website.
          </p>
        </div>
        {/* <div className={styles.border}></div> */}
        <div className={styles.content}>
          <h5>
            <FaPlaneDeparture className={styles.planeicon} />
          </h5>
          <p>
            Trusted by citizens of all states secure browsing and guaranteed
            resolution in 30 minutes.
          </p>
        </div>
        {/* <div className={styles.border}></div> */}
        <div className={styles.content}>
          <h5>
            <FaPlaneDeparture className={styles.planeicon} />
          </h5>
          <p>
            The freedom to compare prices and to choose the most suitable travel
            plans.
          </p>
        </div>
        {/* <div className={styles.border}></div> */}
        <div className={styles.content}>
          <h5>
            <FaPlaneDeparture className={styles.planeicon} />
          </h5>
          <p>
            Pledeged to orchestrate the movement of people and the delivery of
            travel experiences on both a local and global basis.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
