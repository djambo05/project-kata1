import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((prev) => prev + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
};

const useRequest = (request) => {
  const [dataState, setDataState] = useState(null);
  useEffect(() => {
    let cancelled = false;
    request().then((data) => !cancelled && setDataState(data));
    return () => (cancelled = true);
  }, [request]);
  return dataState;
};

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);
  return useRequest(request);
};

const PlanetInfo = ({ id }) => {
  const data = usePlanetInfo(id);
  return (
    <div>
      {id} - {data && data.name}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
