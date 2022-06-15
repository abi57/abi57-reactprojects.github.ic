import React, { useState } from "react";
import "./Styles/Header.css";
const Header = () => {
  const [darkmode, setDarkmode] = useState(false);
  const change = () => {
    setDarkmode((previousmode) => !previousmode);
    // console.log(darkmode);
  };

  return (
    <div className={`${darkmode && "dark-mode"}`}>
      <div className="headermain">
        <h1>REACT NOTES APPLICATION</h1>
        <button onClick={change}>DarkMode</button>
      </div>
    </div>
  );
};

export default Header;
