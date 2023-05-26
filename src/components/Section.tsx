import React, { useContext, useEffect, useState } from "react";
import CarouselContainer from "./CarouselContainer";
import Aboutkwk from "./About/Aboutkwk";
import Organisation from "./Organisation";
import Resolutions from "./Resolutions";
import Question1 from "./Question1";
import Question2 from "./Question2";
import SDGS from "./SDGS";
import Connecting from "./Connecting";
import Aboutus from "./About/Aboutus";
import { DataContext } from "./SharedLayout";

interface SectionProps {
  language: string;
}

const Section = ({ language }: SectionProps) => {
  const data = useContext(DataContext);

  return (
    <div className="section" key={language}>
      {language === "French" ? (
        <>
          <CarouselContainer />
          <Aboutkwk />
          <Organisation />
          <Resolutions />
          <Question1 />
          <Question2 />
          <SDGS />
          <Connecting />
          <Aboutus />
          {/* Add French content components here */}
        </>
      ) : (
        <>
          <CarouselContainer />
          <Aboutkwk />
          <Organisation />
          <Resolutions />
          <Question1 />
          <Question2 />
          <SDGS />
          <Connecting />
          <Aboutus />
        </>
      )}
    </div>
  );
};

export default Section;
