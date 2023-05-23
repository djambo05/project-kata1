import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    <HookSwitcher></HookSwitcher>
  </div>
);

const HookSwitcher = () => {
  const [color, setColor] = useState("black");
  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      Hello World
      <button
        onClick={() => {
          setColor("grey");
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          setColor("white");
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setFontSize((prev) => prev + 2);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setFontSize((prev) => prev - 2);
        }}
      >
        -
      </button>
    </div>
  );
};
