import React from "react";
import Logo from "../assets/imgs/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="overlay">
        <img
          src={Logo}
          alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
          className="logo"
        />
        <h1 className="subtitle">Welcome To Our Restaurant</h1>
        <h1 className="title">Really Fresh &amp; Tasty</h1>
        <a className="btn btn-primary mt-3" href="#book-table">
          Book A Table
        </a>
      </div>
    </header>
  );
}
