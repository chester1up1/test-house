import React from "react";
import "./style.scss";

export default function BottomSlide(props) {
  const { src, width, height } = props;
  return (
    <div className="bottom_slide">
      <img src={src} alt="slide" width={width} height={height} />
    </div>
  );
}
