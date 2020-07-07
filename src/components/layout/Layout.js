import React, { useState } from "react";
import "./style.scss";

export default function Layout() {
  const [index, setIndex] = useState(1);
  const [index_size, setIndexSize] = useState(0);
  const handleChange = (i) => {
    setIndex(i);
  };
  const handleChangeSize = (i) => {
    setIndexSize(i);
  };
  const data = [
    {
      src: "1кімнатні",
      type: "room",
      id: 1,
      info: [
        {
          src: "36.05м2",
          type: "size",
          id: 0,
        },
        {
          src: "37.84м2",
          type: "size",
          id: 1,
        },
        {
          src: "40.41м2",
          type: "size",
          id: 2,
        },
        {
          src: "41.99м2",
          type: "size",
          id: 3,
        },
        {
          src: "43.18м2",
          type: "size",
          id: 4,
        },
        {
          src: "44.91м2",
          type: "size",
          id: 5,
        },
      ],
    },
    {
      src: "2кімнатні",
      type: "room",
      id: 2,
      info: [
        {
          src: "36.05м2",
          type: "size",
          id: 0,
        },
        {
          src: "37.84м2",
          type: "size",
          id: 1,
        },
        {
          src: "40.41м2",
          type: "size",
          id: 2,
        },
        {
          src: "41.99м2",
          type: "size",
          id: 3,
        },
        {
          src: "43.18м2",
          type: "size",
          id: 4,
        },
        {
          src: "44.91м2",
          type: "size",
          id: 5,
        },
      ],
    },
    {
      src: "3кімнатні",
      type: "room",
      id: 3,
      info: [
        {
          src: "36.05м2",
          type: "size",
          id: 0,
        },
        {
          src: "37.84м2",
          type: "size",
          id: 1,
        },
        {
          src: "40.41м2",
          type: "size",
          id: 2,
        },
        {
          src: "41.99м2",
          type: "size",
          id: 3,
        },
        {
          src: "43.18м2",
          type: "size",
          id: 4,
        },
        {
          src: "44.91м2",
          type: "size",
          id: 5,
        },
      ],
    },
    {
      src: "з терасами",
      type: "room",
      id: 4,
      info: [
        {
          src: "36.05м2",
          type: "size",
          id: 0,
        },
        {
          src: "37.84м2",
          type: "size",
          id: 1,
        },
        {
          src: "40.41м2",
          type: "size",
          id: 2,
        },
        {
          src: "41.99м2",
          type: "size",
          id: 3,
        },
        {
          src: "43.18м2",
          type: "size",
          id: 4,
        },
        {
          src: "44.91м2",
          type: "size",
          id: 5,
        },
      ],
    },
  ];
  return (
    <div className="layout">
      <div className="header">
        <p>Планировки</p>
      </div>
      <div className="blank">
        <div className="menu">
          <ul>
            {data.map((item) => {
              return (
                <li
                  onClick={() => handleChange(item.id)}
                  className="room"
                  style={{
                    backgroundColor: item.id == index ? "#ffffff" : "#f1f1f1",
                    color: item.id == index ? "#A68E52" : "#212224",
                  }}
                >
                  {item.src}
                  <ul>
                    {item.id == index
                      ? item.info.map((element) => (
                          <li
                            onClick={() => handleChangeSize(element.id)}
                            style={{
                              opacity: index_size == element.id ? 1 : 0.7,
                            }}
                          >
                            {element.src}
                          </li>
                        ))
                      : ""}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="body"></div>
      </div>
    </div>
  );
}
