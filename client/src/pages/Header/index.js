import React from "react";
import "./styles.css";
import HeaderJumbotron from "../../components/HeaderJumbotron";
import HeaderNavbar from "../../components/HeaderNavbar";

function Header() {
  return (
    <>
      <header>
        <HeaderJumbotron />
        <HeaderNavbar />
      </header>
    </>
  );
}

export default Header;
