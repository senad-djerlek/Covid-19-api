import { createContext } from "react";
import persons from "../common/persons.json";

const PersonContext = createContext();

function PersonContextProvider({ children }) {
  const values = { persons };
  return (
    <PersonContext.Provider value={values}>{children}</PersonContext.Provider>
  );
}

export { PersonContext, PersonContextProvider };
