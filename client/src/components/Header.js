import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/leaderboard">
                Leader Board
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="map">
                Map
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Boinc
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
