import React from "react";
import pdf_logo from "../../img/pdf_logo.svg";
import download from "../../img/download.svg";
import "./style.scss";
export default function Documents() {
  const data = [1, 2, 3];
  return (
    <div className="documents">
      <div className="text_documents">
        <div className="text_header">
          <p>Документы</p>
        </div>
        <div className="bot_text">
          <div className="item">
            <p>
              У нас есть все документы на строительство, ознакомиться с ними вы
              можете в этом разделе.
            </p>
          </div>
          <div className="item">
            <p>
              Или подъехать в отделе продаж: Киевская обл. пгт. Гостомель, ул.
              Варшавская и переулок Варшавский
            </p>
          </div>
        </div>
      </div>
      <div className="pdf_item">
        {data.map((item) => (
          <div className="item">
            <div className="had">
              <img src={pdf_logo} alt="" className="pdf_logo" />
              <p className="mb">18 Mb</p>
            </div>
            <div className="text">
              <p>Разрешение на строительство</p>
            </div>
            <div className="download">
              <p>21.05.2019</p>
              <img src={download} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
