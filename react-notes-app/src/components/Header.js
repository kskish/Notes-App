import React from "react";

const Header = ({ handleToggle }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="button-style"
        onClick={() => {
          handleToggle((previousDarkMode) => !previousDarkMode);
        }}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
