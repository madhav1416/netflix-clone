import React, { useEffect, useState } from "react";
import "./Header.css";
import icon from "./netflixicon.jpg";
function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`header ${show && "header-black"}`}>
      <img
        className="header-image"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
      />
      <img className="header-icon" src={icon} />
    </div>
  );
}
export default Header;
