import React from "react";
import ImageSlider from "./Components/ImageSlider";

function App() {
  return (
    <div>
      <header>
        <img
          style={{ width: 430, marginTop: 40, marginLeft: 50 }}
          src="static/foodImages.png"
          alt="foodImages"
        />
        <img style={{ width: 260 }} src="static/byRW.png" alt="byRW" />
      </header>
      <ImageSlider />
    </div>
  );
}

export default App;
