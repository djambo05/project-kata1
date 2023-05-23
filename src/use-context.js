import React, { useContext } from "react";
import ReactDOM from "react-dom/client";

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value="ffffffff">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};