import React, { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <nav id="nav" className={navbar ? "nav_scrolled" : "nav_container"}>
        <div className="left">
          <h1>Logo</h1>
        </div>
        <div className="right">
          <ul>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
