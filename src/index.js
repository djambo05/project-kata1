import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((prev) => prev + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <Notification />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log("useEffect(mount)");
  }, []);
  useEffect(() => {
    console.log("useEffect(update)");
  });
  useEffect(() => () => console.log("useEffect(unmount)"), []);
  return <p>{value}</p>;
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log("class: mount");
  }
  componentDidUpdate(props) {
    console.log("class: update");
  }
  componentWillUnmount() {
    console.log("class: unmount");
  }
  render() {
    return <p>{this.props.value}</p>;
  }
}

const Notification = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2500);
  }, []);
  return <div>{visible && <p>Hello</p>}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
