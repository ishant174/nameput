import "./App.css";
import Header from "./Header/Header";
import NameBox from "./NameBox/NameBox";
import ColorSelector from "./ColorSelector/ColorSelector";
import { useState } from "react";
function App() {
  const [ColorName, SetColorName] = useState("#000000");
  const changeColor = (color) => {
    SetColorName(color);
  };
  return (
    <div className="App">
      <Header />
      <NameBox currentcolor={ColorName} />
      <ColorSelector changeColor={changeColor} />
    </div>
  );
}

export default App;
