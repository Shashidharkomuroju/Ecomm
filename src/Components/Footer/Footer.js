import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer>
      <div className="logo">
        <h4>E-Comm</h4>
        <p>
          There are many variations of passages <span></span> of lorem ipsum
          available, but the <span></span> majority suffered.
        </p>
      </div>
      <div className="links">
        <h3>Explore</h3>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Our Project</Link>
        <Link>Meet the Farmers</Link>
        <Link>Latest News</Link>
        <Link>Contact</Link>
      </div>
      <div className="news">
        <h3>News</h3>
        <div className="new1">
          <h5>Bringing Food Production <br /> Back To Cities</h5>
          <h6>April 15, 2024</h6>
        </div>
        <div className="new1">
          <h5>Bringing Food Production <br /> Back To Cities</h5>
          <h6>April 15, 2024</h6>
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="box">
          <h5>777777777</h5>
        </div>
        <div className="box">
          <h5>shashidhar.komuroju22@gmail.com</h5>
        </div>
        <div className="box">
          <h5>80 broklyn golden street line New York, USA</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
