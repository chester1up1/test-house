import React, { useState } from "react";
import logo_club from "../../img/logo_club.svg";
import street_logo from "../../img/street_logo.svg";
import logo_orange from "../../img/logo_orange.svg";
import inst from "../../img/inst.svg";
import facebook from "../../img/facebook.svg";
import phone_footer from "../../img/phone_footer.svg";
import "./style.scss";

export default function Footer() {
  const [index, setIndex] = useState(0);
  const handleChange = (i) => {
    setIndex(i);
  };
  return (
    <div className="footer">
      <img src={logo_club} alt="" />
      <div className="street_">
        <img src={street_logo} alt="street" />
        <p>Киев, переулок Радистов, 14 A</p>
      </div>
      <div className="phone_footer">
        <img src={phone_footer} alt="phone_footer" />
        <p>Отдел продаж: (044) 555 56 25</p>
      </div>
      <div className="logo_sm">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook" style={{ marginRight: 17 }} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={inst} alt="inst" />
        </a>
      </div>
      <div className="language">
        <p
          onClick={() => handleChange(0)}
          className={index == 0 ? "active" : ""}
          style={{ marginRight: 15, cursor: "pointer" }}
        >
          UA
        </p>
        <p
          onClick={() => handleChange(1)}
          className={index == 1 ? "active" : ""}
          style={{ cursor: "pointer" }}
        >
          RU
        </p>
      </div>
      <a
        href="https://smarto.agency"
        target="_blank"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src={logo_orange} alt="logo_orange" />
      </a>
    </div>
  );
}
