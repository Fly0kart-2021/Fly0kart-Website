import React, { useEffect } from "react";
import "./OverView.css";
import aos from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
const OverView = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="companyOverViewContainer bgov">
      <div className="companyOverViewTitle" data-aos="slide-up">
        A Little About <b>Us</b>
      </div>
      <div className="companyOverViewDescription" data-aos="fade-up">
        FLYOKART is a global technology company which provides you with the best
        experience of online air ticket booking offering connections to over
        187+ countries and in partnership with about 600 airlines all around the
        globe. Build connections with us for the best flight ticket prices and
        also flight ticket offers giving best way to compare prices among all
        airlines . Through online air ticket booking at FLYOKART you access
        multiple airlines with multiple prices to compare and choose from most
        suitable travel plans. With the help of FLYOKART, you can book your
        flight tickets with much ease and comfort providing domestic and
        international flights . Furnishing with amazing online air ticket
        booking, it also provides 24/7 customer service and 30 minutes
        guaranteed resolution. If not, get your compensation back. Looking
        forward to serve you with the best online flight booking experience.
      </div>
    </div>
  );
};

export default OverView;
