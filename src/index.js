import React, { Component, useContext, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((prev) => prev + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <ClassCounter value={value} />
        <HookCounter value={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
};

const HookCounter = ({ value }) => {
  return <p>{value}</p>;
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log("class: mount");
  }
  componentDidUpdate() {
    console.log("class: update");
  }
  componentWillUnmount() {
    console.log("class: unmount");
  }
  render() {
    return <p>{this.props.value}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
