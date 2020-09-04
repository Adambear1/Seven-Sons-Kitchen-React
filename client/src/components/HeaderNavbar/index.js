import React from "react";
import { Link } from "react-scroll";

function HeaderNavbar() {
  return (
    <>
      <div class="logo-sevensons"></div>

      <div class="header">
        <ul>
          <li class="menu" id="menu">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Menu
            </Link>
          </li>
          <li class="takeout" id="takeout">
            <Link
              to="takeOut"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Take Out
            </Link>
          </li>
          <li class="ourStory" id="ourStory">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li class="catering" id="catering">
            <Link
              to="catering"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Catering
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeaderNavbar;
