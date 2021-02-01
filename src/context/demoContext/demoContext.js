import { React, useState, createContext } from "react";

export const DemoContext = createContext();

export const DemoContextProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <DemoContext.Provider value={[count, setCount]}>
      {props.children}
    </DemoContext.Provider>
  );
};
