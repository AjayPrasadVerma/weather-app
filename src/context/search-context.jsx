import React, { useState } from "react";

const SearchContext = React.createContext();

export default SearchContext;

export const CntxProvider = (props) => {
  const [cityValue, setCityValue] = useState("Mumbai");

  const setCity = (city) => {
    setCityValue(city);
  };

  return (
    <SearchContext.Provider value={{ cityValue, setCity }}>
      {props.children}
    </SearchContext.Provider>
  );
};
