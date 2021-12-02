import React, { useEffect } from "react";
import styles from "./Steps.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
const Steps = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className={styles.stepsWrapper} data-aos="fade-up">
      <div className={styles.Heading} data-aos="fade-up">
        <b>Here's a look at Journey of Booking with Fly0kart </b>
        <sup className={styles.sup}>IATA certified</sup>
      </div>
      <div
        className={styles.stepsContainer}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className={styles.stepCard}>
          <div className={styles.stepNo}>1.</div>
          <p className={styles.stepDescription}>
            Log in at Fly0kart, search desired Airports dates you wan to travel
            on and enter details of members travelling
          </p>
        </div>
        <div className={styles.stepCard}>
          <div className={styles.stepNo}>2.</div>
          <p className={styles.stepDescription}>
            Choose the most suitable flight for you from wide range of flights
            from Fly0kart's industry leading <b>GDS</b>(Global destribution
            System) integrated Flight search API
          </p>
        </div>
        <div className={styles.stepCard}>
          <div className={styles.stepNo}>3.</div>
          <p className={styles.stepDescription}>
            Proceed to Book a flight by choosing and making a payment to us, and
            recieve tickets with in 30mins!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Steps;
