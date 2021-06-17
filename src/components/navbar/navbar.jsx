import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a href="/#" className="navbar-brand">
            Frontend Bootcamp
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="nav navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/#learn" className="nav-link">
                  What You'll Learn
                </a>
              </li>
              <li className="nav-item">
                <a href="/#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="/#instractors" className="nav-link">
                  Instractors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
