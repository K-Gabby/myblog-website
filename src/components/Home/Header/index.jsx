import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="home-header">
      <h2>K-Gabby Blog Posts</h2>
      <h1>
        <span>“</span> Blog <span>”</span>
      </h1>
      <p>
        A vibrant hub where curiosity meets inspiration. <br />
        Dive into daily stories that spark ideas, fuel passions, <br />
        and bring a touch of joy to your day.
      </p>
      <Link to='/about' className="header-link">About Us</Link>
    </header>
  );
};

export default Header;
