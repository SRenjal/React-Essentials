import React from "react";

const TabButton = ({ children, onSelect, selected }) => {
  return (
    <button className={selected ? "active" : null} onClick={onSelect}>
      {children}
    </button>
  );
};

export default TabButton;
