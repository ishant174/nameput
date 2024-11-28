import { useState } from "react";

function ColorSelector(props) {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const changeColorPicker = (e) => {
    setSelectedColor(e.target.value);
    props.changeColor(selectedColor);
  };
  return (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center space-y-4">
      <label className="text-lg">Pick a color:</label>
      <input
        type="color"
        value={selectedColor}
        onChange={changeColorPicker}
        className="w-12 h-12 border border-gray-300"
      />
      <p className="text-lg">
        You selected:{" "}
        <span style={{ color: selectedColor }}>{selectedColor}</span>
      </p>
    </div>
  );
}

export default ColorSelector;
