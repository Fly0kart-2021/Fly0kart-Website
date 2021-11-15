import React, { useEffect } from "react";
import Styles from "./Cards.module.css";
import illustration from "./images/bgPhoto.svg";
import aos from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
const Cards = ({ data, index }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className={Styles.container} data-aos="fade-up">
      {data[index].map((card) =>
        card.map((item) => (
          <div className={Styles.card}>
            <div className={Styles.cardinner}>
              <div className={Styles.imageWrapper}>
                <div>
                  <img
                    src={illustration}
                    alt=""
                    className={Styles.OuterCircleImg}
                  />
                  <div className={Styles.empImg}>
                    <img
                      src={item.image}
                      alt=""
                      className={Styles.InnerCircleImg}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={Styles.name}>{item.name}</div>
                <div className={Styles.title}>{item.title}</div>
                <div className={Styles.desc}>{item.description}</div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
