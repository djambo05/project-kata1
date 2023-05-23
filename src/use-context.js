import React, { useContext } from "react";

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
