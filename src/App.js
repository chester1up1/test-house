import React from "react";
import HeaderSlider from "./components/header-slider/HeaderSlider";
import Gallery from "./components/gallery/Gallery";
import "./style.scss";

function App() {
  return (
    <div className="app">
      <HeaderSlider />
      <Gallery />
      <div style={{ width: 1280, height: 720, backgroundColor: "green" }} />
    </div>
  );
}

export default App;
