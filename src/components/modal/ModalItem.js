import React, { useState } from "react";
import { Modal, ModalBody, Input, Button } from "reactstrap";
import modal_img from "../../img/modal_img.svg";
import close_logo from "../../img/close_logo.svg";
import "./style.scss";
const ModalItem = (props) => {
  const { modal, toggle } = props;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
    setError("");
  };
  const changeNumber = (e) => {
    setNumber(e.target.value);
    setError("");
  };
  const send = () => {
    if (name !== "") {
      if (number !== "") {
        console.log("Имя: ", name, " Телефон: ", number);
        toggle();
      } else {
        setError("number");
      }
    } else {
      setError("name");
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="modal_brd">
          <div className="form">
            <p className="header">Заказать звонок</p>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Имя:*"
              value={name}
              onChange={changeName}
              invalid={error == "name" ? true : false}
            />
            <Input
              type="phone"
              name="phone"
              id="number"
              placeholder="Телефон:*"
              value={number}
              onChange={changeNumber}
              invalid={error == "number" ? true : false}
            />
            <Button color="" className="btn_" onClick={send}>
              ОТПРАВИТЬ
            </Button>{" "}
          </div>
          <div className="photo">
            <img
              src={close_logo}
              alt="close"
              className="close_logo"
              onClick={toggle}
            />
            <img src={modal_img} alt="modal_img" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalItem;
