import React from "react";
import $ from "jquery";
import { FaBars, FaTimes } from "react-icons/fa";

function Header(props) {
  function showNav(e) {
    e.preventDefault();
    $(".header__menu").slideToggle();
  }

  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            Idaho <em>state</em>
          </a>
        </div>

        <nav className="header__menu">
          <ul>
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
          </ul>
        </nav>

        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes />
        </button>

        <div className="header__member">
          <a href="/">Sign in</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
