import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <AppContext.Provider value={{ open, handleClick, handleClose }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
