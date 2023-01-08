import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const fetchDate = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const date = await response.json();
    console.log(date);
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <AppContext.Provider value={{ name: "John" }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
