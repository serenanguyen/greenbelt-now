import React, { useContext } from "react";

export const useLoadingContext = () => useContext(LoadingContext);

const defaultValues = {isLoading: false};
export const LoadingContext = React.createContext(defaultValues);