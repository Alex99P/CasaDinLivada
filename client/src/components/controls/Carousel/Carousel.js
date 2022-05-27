import React, { useState } from "react";
import "./Carousel.scss";
import { images } from "./Caoureselimages";
import { imagesCiubar } from "./Caoureselimages";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel({ name }) {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      {name === "cabana" ? (
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      ) : (
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${imagesCiubar[currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currImg < imagesCiubar.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
