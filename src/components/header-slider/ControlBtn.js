import React from "react";
import left from "../../img/left.svg";
import right from "../../img/right.svg";
import "./style.scss";

export default function ControlBtn(props) {
  const { data, toSlide, prevSlide, nextSlide, index } = props;
  return (
    <div className="btn_control">
      <div className="point">
        {data.map((item) => (
          <div
            className="item"
            style={{
              opacity: index == item.id ? 1 : 0.5,
            }}
            onClick={() => toSlide(item.id)}
          />
        ))}
      </div>
      <div className="arrow">
        <img src={left} alt="left" onClick={prevSlide} />
        <img src={right} alt="right" onClick={nextSlide} />
      </div>
    </div>
  );
}
