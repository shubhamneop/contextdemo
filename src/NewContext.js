import React from "react";

export const NewContext = React.createContext("saf");

function NewProvider(props) {
  return (
    <NewContext.Provider value="data from context api">
      {props.children}
    </NewContext.Provider>
  );
}

export default NewProvider;
