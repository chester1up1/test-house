import React, { useState } from "react";
import left from "../../img/left_2.svg";
import right from "../../img/right_2.svg";

export default function ControlBtn(props) {
  const { data, toSlide, prevSlide, nextSlide, index } = props;
  const prevGo = () => {
    if (index - 1 >= 0) {
      prevSlide(data[index - 1].src, index - 1);
    } else {
      prevSlide(data[5].src, 5);
    }
  };
  const nextGo = () => {
    if (index + 1 <= 5) {
      nextSlide(data[index + 1].src, index + 1);
    } else {
      nextSlide(data[0].src, 0);
    }
  };
  return (
    <div className="control_btn_">
      <div className="bot">
        <div className="point">
          {data.map((item) => (
            <div
              className="item"
              style={{
                backgroundColor: index == item.id ? "#a68e52" : "#DDDDDD",
              }}
              onClick={() => toSlide(item.id, item.src)}
            />
          ))}
        </div>
        <div className="arrow">
          <img src={left} alt="left" onClick={prevGo} />
          <img src={right} alt="right" onClick={nextGo} />
        </div>
      </div>
    </div>
  );
}
