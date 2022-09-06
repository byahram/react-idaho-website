import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header(props) {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            Idaho <em>state</em>
          </a>
        </div>

        <nav className="header__menu">
          <ul ref={navRef}>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">FOOD/DRINK</a>
            </li>
            <li>
              <a href="/">THINGS TO DO</a>
            </li>
            <li>
              <a href="/">TRAVEL TIPS</a>
            </li>
            <button className="nav-btn nav-close-btn" onClick={showNav}>
              <FaTimes />
            </button>
          </ul>
        </nav>

        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>

        <div className="header__member">
          <a href="/">Sign in</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
