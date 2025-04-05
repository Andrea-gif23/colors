import React, { useState } from "react";
import BoxColor from "./BoxColor";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="form-container">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Escribe un color..."
      />
      <div className="boxes-grid">
        {colors.map((color) => (
          <BoxColor key={color} color={color} inputText={inputText} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;