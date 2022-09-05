import React from "react";

function Header(props) {
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
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <button class="toggle-btn">Menu</button>
      </div>
    </header>
  );
}

export default Header;
