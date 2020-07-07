import React from "react";
import "./style.scss";

export default function Slide(props) {
  const { src } = props;
  return (
    <div className="slide">
      <img src={src} alt="slide" width="965px" height="691px;" />
    </div>
  );
}
