import React, { useState } from "react";
import left from "../../img/left_2.svg";
import right from "../../img/right_2.svg";

export default function ControlBtn(props) {
  const { data, toSlide, prevSlide, nextSlide, index } = props;
  const [active, setActive] = useState(0);
  const chngeActive = (i) => {
    setActive(i);
  };
  return (
    <div className="control_btn_">
      <div className="top">
        <div
          className={active == 0 ? "item_long active_long" : "item_long"}
          onClick={() => {
            chngeActive(0);
          }}
        >
          <p>КЛУБНЫЙ ДОМ</p>
        </div>
        <div
          className={active == 1 ? "item active" : "item"}
          onClick={() => {
            chngeActive(1);
          }}
        >
          <p>КЛАБ РЕЗИДЕНС</p>
        </div>
      </div>
      <div className="bot">
        <div className="point">
          {data.map((item) => (
            <div
              className="item"
              style={{
                backgroundColor: index == item.id ? "#a68e52" : "#DDDDDD",
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
    </div>
  );
}
