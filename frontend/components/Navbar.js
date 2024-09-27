import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
  return (
    <nav
      className="navbar is-primary "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
  
        <div className="navbar-burger">
          <a href="https://github.com/Phiyan18" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="title is-3 has-text-white mt-2"
            />
          </a>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end container">
          <div className="navbar-item">
            <a href="https://github.com/Phiyan18" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="title is-3 has-text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
