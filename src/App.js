import React, { useState } from "react";
import HeaderSlider from "./components/header-slider/HeaderSlider";
import Gallery from "./components/gallery/Gallery";
import Layout from "./components/layout/Layout";
import ModalItem from "./components/modal/ModalItem";
import Documents from "./components/documents/Documents";
import "./style.scss";

function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="app">
      <HeaderSlider toggle={toggle} />
      <Gallery />
      <div className="forest">
        <Layout toggle={toggle} />
        <Documents />
      </div>
      <ModalItem modal={modal} toggle={toggle} />

      <div style={{ width: 1280, height: 720, backgroundColor: "green" }} />
    </div>
  );
}

export default App;
