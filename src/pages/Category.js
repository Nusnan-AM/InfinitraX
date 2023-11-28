import React from "react";
import "../App.css";
import "../styles/Category.css";
import Sidebar from "../layouts/Sidebar";

function Category() {
  return (
    <Sidebar>
      <div className="container">
        <nav className="navbar mt-3 py-1 mb-3 rounded">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <span className="navbar-brand mb-0 h1 text-white">
              Category Section
            </span>
          </div>
        </nav>
        <div className="container Category-FilterSection">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div className="col Category-FilterSection"></div>
          <div className="col Category-FilterSection"></div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Category;
