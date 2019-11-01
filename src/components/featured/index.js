import React from "react";
import Carousel from "./carousel";
import TimeUntil from "./timeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />

      <div className="artist_name">
        <div className="wrapper">Arianna Grande</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
