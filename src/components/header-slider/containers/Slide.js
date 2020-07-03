import React from "react";
import street_logo from "../../../img/street_logo.svg";
import "./style.scss";

export default function Slide(props) {
  const { src, header, text, logo, street, underground } = props;
  return (
    <div className="slide">
      <img src={src} alt="slide" />
      <img src={logo} alt="logo" className="logo" />
      <p className="header">{header}</p>
      <p className="text">{text}</p>
      <div className="street">
        <img src={street_logo} alt="" />
        <p>{street}</p>
      </div>
      <div className="underground_">
        <div className="ellips">
          <p className="m_">M</p>
        </div>
        <p className="under_text">{underground}</p>
      </div>
    </div>
  );
}
