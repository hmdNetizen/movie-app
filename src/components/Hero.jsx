import React from "react";
import audience from "../assets/Rectangle 5.png";
import styled from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styled.hero}>
      <div>
        <h1>Watch Something Incredible</h1>
      </div>
      <img src={audience} alt="audience at the cinema" />
    </section>
  );
};

export default Hero;
