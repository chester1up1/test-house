import React, { useState, useEffect } from "react";
import Slide from "./containers/Slide";
import ControlBtn from "./ControlBtn";
import { Button } from "reactstrap";
import header_bg_1 from "../../img/header_bg_1.jpg";
import header_bg_2 from "../../img/header_bg_2.jpg";
import header_logo_1 from "../../img/header_logo_1.svg";
import header_logo_2 from "../../img/header_logo_2.svg";
import phone from "../../img/phone.svg";
import bottom_logo from "../../img/bottom_logo.svg";
import "./style.scss";

export default function HeaderSlider(props) {
  const { toggle } = props;
  const [index, setIndex] = useState(0);
  const data = [
    {
      src: header_bg_1,
      logo: header_logo_1,
      header: "Жилой комплекс КЛАБ РЕЗИДЕНС",
      text: "Квартиры уже в продаже!",
      street: "Киев, переулок Радистов, 14а",
      underground: "ЛЕСНАЯ",
      id: 0,
    },
    {
      src: header_bg_2,
      logo: header_logo_2,
      header: "Жилой комплекс КЛУБНЫЙ ДОМ",
      text: "Это две строчки текста на семь слов",
      street: "Киев, переулок Радистов, 40",
      underground: "ЛЕСНАЯ",
      id: 1,
    },
  ];
  const nextSlide = () => {
    if (index + 1 < data.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(data.length - 1);
    }
  };

  const toSlide = (id) => {
    setIndex(id);
  };

  return (
    <div className="header_slider" id={0}>
      <div className="phone">
        <div className="ellipse">
          <img src={phone} alt="phone" />
        </div>
        <div className="phone_text">
          <p className="number">8 (800) 77-512-77</p>
          <p className="text" onClick={toggle}>
            Заказать звонок
          </p>
        </div>
        <div className="ellipse_">
          <p>UA</p>
        </div>
      </div>
      <div className="about">
        <Button color="" className="btn_">
          О КОМПЛЕКСЕ
        </Button>{" "}
      </div>
      <ul
        style={{
          transform:
            index === 0 ? `translateX(0px)` : `translateX(-${index * 1200}px)`,
        }}
      >
        {data.map((item) => (
          <li key={item.id}>
            <Slide
              src={item.src}
              header={item.header}
              text={item.text}
              logo={item.logo}
              street={item.street}
              underground={item.underground}
            />
          </li>
        ))}
      </ul>
      <ControlBtn
        data={data}
        toSlide={toSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        index={index}
      />
      <div className="logo_down">
        <img src={bottom_logo} alt="bottom_logo" />
      </div>
    </div>
  );
}
