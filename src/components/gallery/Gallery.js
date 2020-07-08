import React, { useState } from "react";
import gallery_house_1 from "../../img/gallery_house_1.jpg";
import gallery_house_2 from "../../img/gallery_house_2.jpg";
import header_bg_1 from "../../img/header_bg_1.jpg";
import tree from "../../img/tree.svg";
import Slide from "./containers/Slider";
import BottomSlide from "./containers/BottomSlide";
import ControlBtn from "./ControlBtn";
import "./style.scss";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const data = [
    {
      src: gallery_house_1,
      id: 0,
    },
    {
      src: gallery_house_2,
      id: 1,
    },
    {
      src: header_bg_1,
      id: 2,
    },
    {
      src: gallery_house_2,
      id: 3,
    },
    {
      src: header_bg_1,
      id: 4,
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
    console.log(id);
  };
  return (
    <div className="gallery">
      <div className="slider">
        <ul
          style={{
            transform:
              index == 0 ? `translateX(0px)` : `translateX(-${index * 965}px)`,
          }}
        >
          {data.map((item) => (
            <li key={item.id}>
              <Slide src={item.src} />
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <ul
          style={{
            transform: index == 0 ? `translateX(0px)` : `translateX(-${25}px)`,
          }}
        >
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                toSlide(item.id);
              }}
            >
              <BottomSlide
                src={item.src}
                width={item.id == index ? 166 : 119}
                height={item.id == index ? 103 : 74}
              />
            </li>
          ))}
        </ul>
      </div>
      <ControlBtn
        data={data}
        toSlide={toSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        index={index}
      />
      <img src={tree} alt="tree" className="tree" />
    </div>
  );
}
