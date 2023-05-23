import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    <HookSwitcher></HookSwitcher>
  </div>
);

const HookSwitcher = () => {
  return (
    <div style={{ padding: "10px", backgroundColor: "white" }}>
      <button onClick={() => {}}>Dark</button>
      <button onClick={() => {}}>Light</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
