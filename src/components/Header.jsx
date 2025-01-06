import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
export default function Header() {
  const counterVal = useSelector((state) => state.movfav.favorites.length);
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
            <Link className="nav-link" to="/register">
              Register           
             </Link>
             <Link className="nav-link" to="/setting">
              setting           
             </Link>
             <Link className="nav-link" to="/fav_movies">
             <i className="fa-regular fa-heart"></i>{counterVal}
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}