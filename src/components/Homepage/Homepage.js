import React from "react";
import Landing from "./Landing/Landing";
import Features from "./Features/Features";
import Benefits from "./Benefits/Benefits";
import Contact from "./Contact/Contact";
import Steps from "./Steps/Steps";

const Homepage = () => {
  return (
    <div>
      <Landing />
      <Steps />
      <Features />
      <Benefits />
      <Contact />
    </div>
  );
};

export default Homepage;
