import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from "./components/ImgText";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts="nexon" />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon", "gray"]} />
      </Contents>
    </>
  );
}

export default App;
