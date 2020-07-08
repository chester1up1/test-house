import React, { useState, useEffect } from "react";
import up from "../../img/up.svg";
import down from "../../img/down.svg";
import { ScrollTo } from "react-scroll-to";
export default function ControlBtn(props) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    // console.log("scrollTop", scrollTop);
    if (scrollTop >= 0 && scrollTop < 620) {
      console.log("index->", index);
      setIndex(0);
    }
    if (scrollTop >= 620 && scrollTop < 1500) {
      console.log("index->", index);
      setIndex(1);
    }
    if (scrollTop >= 1500 && scrollTop < 2285) {
      console.log("index->", index);
      setIndex(2);
    }
    if (scrollTop >= 2285 && scrollTop < 2940) {
      console.log("index->", index);
      setIndex(3);
    }
    if (scrollTop > 2940) {
      console.log("index->", index);
      setIndex(4);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  const data = [
    {
      id: 0,
      y_pos: 0,
    },
    {
      id: 1,
      y_pos: 749,
    },
    {
      id: 2,
      y_pos: 1506,
    },
    {
      id: 3,
      y_pos: 2292,
    },
    {
      id: 4,
      y_pos: 5000,
    },
  ];

  return (
    <div className="nav_control_btn">
      <ScrollTo>
        {({ scroll }) => (
          <img
            src={up}
            alt="up"
            className="up"
            onClick={() => {
              scroll({
                x: 0,
                y: index !== 0 ? data[index - 1].y_pos : 0,
                smooth: true,
              });
            }}
          />
        )}
      </ScrollTo>
      <ScrollTo>
        {({ scroll }) => (
          <img
            src={down}
            alt="down"
            className="down"
            onClick={() => {
              scroll({
                x: 0,
                y: index !== 4 ? data[index + 1].y_pos : data[0].y_pos,
                smooth: true,
              });
            }}
          />
        )}
      </ScrollTo>
    </div>
  );
}
