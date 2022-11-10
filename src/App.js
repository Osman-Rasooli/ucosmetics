import React from "react";
import Header from "./components/header/header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/slider/slider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
    </div>
  );
}

export default App;
