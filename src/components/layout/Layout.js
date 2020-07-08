import React, { useState } from "react";
import layout_img from "../../img/layout_img.png";
import "./style.scss";
import ControlBtn from "./ControlBtn";

export default function Layout(props) {
  const { toggle } = props;
  const [index, setIndex] = useState(1);
  const [index_size, setIndexSize] = useState(0);
  const [size, setSize] = useState("36.05м2");

  const nextSlide = (size, id) => {
    setIndexSize(id);
    setSize(size);
  };

  const prevSlide = (size, id) => {
    setIndexSize(id);
    setSize(size);
  };

  const toSlide = (id, size) => {
    setIndexSize(id);
    setSize(size);
  };

  const handleChange = (i) => {
    setIndex(i);
  };
  const handleChangeSize = (i, size) => {
    setIndexSize(i);
    setSize(size);
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
                            onClick={() =>
                              handleChangeSize(element.id, element.src)
                            }
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
        <div className="body">
          <div className="img">
            <img src={layout_img} alt="" />
          </div>
          <div className="info">
            <div className="main_info">
              <div className="header_">
                <p>Квартира{" " + size}</p>
              </div>
              <div className="specifications">
                <div className="item_1">
                  <div>
                    <p>Будинок</p>
                    <p className="black_">15</p>
                  </div>
                  <div>
                    <p>Поверх</p>
                    <p className="black_">4</p>
                  </div>
                  <div>
                    <p>Житлова площа</p>
                    <p className="black_">{size}</p>
                  </div>
                  <div>
                    <p>Загальна площа</p>
                    <p className="black_">{size}</p>
                  </div>
                </div>
                <div className="item_2">
                  <div>
                    <p>Спальня</p>
                    <p className="black_">14.56м2</p>
                  </div>
                  <div>
                    <p>Кухня</p>
                    <p className="black_">17.34м2</p>
                  </div>
                  <div>
                    <p>Передпокій</p>
                    <p className="black_">14.56м2</p>
                  </div>
                  <div>
                    <p>Санвузол</p>
                    <p className="black_">17.34м2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts">
              <div className="top_text">
                <p className="as">
                  Свяжитесь с нами,
                  <br /> чтобы узнать больше
                </p>
                <p>
                  Отдел продаж:
                  <br /> <span className="phone">(044) 555 57 75</span>
                </p>
              </div>
              <div className="bot_text">
                <p onClick={toggle}>Заказать звонок</p>
              </div>
            </div>
            <ControlBtn
              data={data[0].info}
              toSlide={toSlide}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              index={index_size}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
