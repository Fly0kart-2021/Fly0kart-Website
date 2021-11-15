import React, { useState, useEffect } from "react";
import "./MeetTheTeam.css";
import Cards from "./Cards";
import Data from "./Data";
import aos from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
const MeetTheTeam = () => {
  const [active, setActive] = useState("Leader");
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  var btns = document.getElementsByClassName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      console.log(current);
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  return (
    <div>
      <h1 className="heading" data-aos="fade-up">
        Meet The <strong>Team</strong>!
      </h1>
      <div id="nav" className="teamnav" data-aos="fade-up">
        <button
          className={`button ${active === "Leader" ? "active" : null}`}
          onClick={() => setActive("Leader")}
        >
          LEADERSHIP
        </button>
        <button
          className={`button ${active === "Management" ? "active" : null}`}
          onClick={() => setActive("Management")}
        >
          MANAGEMENT
        </button>
        <button
          className={`button ${active === "Creative" ? "active" : null}`}
          onClick={() => setActive("Creative")}
        >
          CREATIVE
        </button>
        <button
          className={`button ${active === "Development" ? "active" : null}`}
          onClick={() => setActive("Development")}
        >
          DEVELOPMENT
        </button>
      </div>
      <div>
        {active === "Leader" && <Cards data={Data} index={0} />}
        {active === "Management" && <Cards data={Data} index={1} />}
        {active === "Creative" && <Cards data={Data} index={2} />}
        {active === "Development" && <Cards data={Data} index={3} />}
      </div>
    </div>
  );
};

export default MeetTheTeam;
