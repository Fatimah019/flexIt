import React from "react";
import { Portal } from "react-portal";
import "./index.css";

const CustomLoader = ({ visible }) => {
  if (!visible) return null;
  return (
    <Portal closeOnEsc closeOnOutsideClick>
      <div className="backdrop">
        <h1>Loading</h1>
      </div>
    </Portal>
  );
};

export default CustomLoader;
