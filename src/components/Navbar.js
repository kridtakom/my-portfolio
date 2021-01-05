import React from "react";
import { Link } from "react-router-dom";
import "./TH.css";

export default function Navbar() {
  return (
    <div>
      <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div className="container py-2 py-md-5">
          <div className="row align-items-start">
            <div className="col-md-12">
              <ul className="custom-menu list-group list-group-horizontal">
                <li className="navButton mx-3 heading">
                  <Link to="/"> Home</Link>
                </li>
                <li className="navButton mx-3 heading">
                  <Link to="/aboutme"> About Me </Link>
                </li>
                {/* <li className="navButton mx-3">
                  <Link to="/contract"> Contract </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand navBrand">
            {"[{(MYPORTFOLIO)}]"}
          </Link>

          <a
            href="#"
            className="burger"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </nav>
    </div>
  );
}
