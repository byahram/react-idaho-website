import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts="nexon" />
      </Contents>
    </>
  );
}

export default App;
