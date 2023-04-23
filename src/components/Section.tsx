import React from "react";
import CarouselContainer from "./CarouselContainer";
import Aboutkwk from "./Aboutkwk";
import Organisation from "./Organisation";
import Resolutions from "./Resolutions";
import Question1 from "./Question1";
import Question2 from "./Question2";
import SDGS from "./SDGS";
import Connecting from "./Connecting";
import Aboutus from "./Aboutus";

const Section = () => {
  return (
    <div className="section">
      <CarouselContainer />
      <Aboutkwk />
      <Organisation />
      <Resolutions />
      <Question1 />
      <Question2 />
      <SDGS />
      <Connecting />
      <Aboutus />
    </div>
  );
};

export default Section;
