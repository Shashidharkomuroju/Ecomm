import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {

  const { cartItems } = useCart()

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h2>E-comm</h2>
        </Link>
      </div>
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="info">Menu</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/Groceries">Groceries</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/Electronics">Electronics</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/Fashion">Fashion</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <BsSearch className="icon" />
      </div>
      <div className="cart">
        <Link to='/cart'>
          <FaShoppingCart size={30} />
          <span>{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
