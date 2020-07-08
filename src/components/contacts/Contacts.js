import React from "react";
import mail from "../../img/mail.svg";
import map from "../../img/map.svg";
import op from "../../img/op.svg";
import rez from "../../img/rez.svg";
import rec from "../../img/rec.svg";
import club from "../../img/club.svg";
import "./style.scss";
export default function Contacts(props) {
  const { toggle } = props;
  return (
    <div className="contacts_box">
      <div className="text_box">
        <div className="title">
          <p>Офис продаж</p>
        </div>
        <div className="text1">
          <p className="street">Адрес</p>
          <p className="name">Киев, переулок Радистов, 16</p>
          <div className="open">
            <a
              href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%A0%D0%B0%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B2,+16,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4758649,30.667719,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4da908dd21e47:0x4b967ec85baaabb5!8m2!3d50.4758649!4d30.6699077?hl=ru"
              target="_blank"
            >
              Открыть в навигаторе
            </a>
          </div>
        </div>
        <div className="text2">
          <p className="phone_">Телефон</p>
          <p className="number_">
            (044) 555 57 75 <span className="time"> ПН-ПТ: 9:00 - 18:00</span>
          </p>
          <div className="open">
            <p onClick={toggle}>Заказать звонок</p>
          </div>
        </div>
      </div>
      <div className="map">
        <div className="send">
          <img src={mail} alt="mail" />
          <a href="mailto:house-create@gmail.com">Написать нам</a>
        </div>
        <div className="map_box">
          <img src={op} alt="op" className="op" />
          <img src={rez} alt="rez" className="rez" />
          <img src={rec} alt="rec" className="rec" />
          <img src={club} alt="club" className="club" />
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
}
