import React from "react";

const BoxColor = ({ color, inputText }) => {
  const isMatch = inputText.toLowerCase() === color.toLowerCase();

  return (
    <div className={`box ${isMatch ? color : ""}`.trim()}>
      <p>{inputText || color}</p>
      {!isMatch && <p>No soy {color}</p>}
    </div>
  );
};

export default BoxColor;
