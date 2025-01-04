import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          Movies App
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Movies List
            </Link>
            <Link className="nav-link" to="/add-recipe">
              Add Movie
            </Link>
            <Link className="nav-link" to="/about-us">
              About us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}