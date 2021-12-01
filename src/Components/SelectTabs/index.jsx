import React from "react";
import "./index.css";

export const SelectTabs = ({ name, action }) => {
  return (
    <div className="select-tab">
      {name}
      <span onClick={action}>
        <i className="fa fa-angle-down"></i>
      </span>
    </div>
  );
};

export default SelectTabs;
