import React, { createContext, useState } from "react";

const PracticeContext = createContext();
const PracticeProvider = ({ children }) => {
  const [val, setVal] = useState("");
  const [capital, setCapital] = useState("");
  return (
    <PracticeContext.Provider value={{ val,setVal, capital, setCapital }}>
      
      {children}
    </PracticeContext.Provider>
  );
};

export { PracticeContext, PracticeProvider };
