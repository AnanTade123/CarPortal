/* eslint-disable react/prop-types */

import React, { createContext } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={{ ToastContainer }}>
      {children}
    </ToastContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
  return React.useContext(ToastContext);
};
