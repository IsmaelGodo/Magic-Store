import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav>
  <ul className="nav-bar">
    <li>
      <Link id="link-nav" to="/"><h3>Home</h3>  </Link>
    </li>
    <li>
      <Link id="link-nav" to="/dashboard"><h3>Dashboard</h3>  </Link>
    </li>
    <li>
      <Link id="link-nav" to="/editor"> <h3> Editor </h3> </Link>
    </li>
  </ul>
</nav>
};

export default NavBar;
