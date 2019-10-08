import React, { useContext } from "react";

export const useResultsContext = () => useContext(ResultsContext);

export const ResultsContext = React.createContext({});