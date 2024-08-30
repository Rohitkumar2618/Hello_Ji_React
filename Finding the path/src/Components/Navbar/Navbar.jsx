import { useState } from "react";
import "./Navbar.css";
import {
  RiLifebuoyLine,
  RiTv2Line,
  RiSearch2Line,
  RiDiscountPercentLine,
  RiShoppingCart2Line,
  RiUser3Line,
} from "@remixicon/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [btnLogin, setBtnLogin] = useState("Login");

  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="Navbar">
      <div className="logo">
        <img
          src="https://png.pngtree.com/template/20200314/ourmid/pngtree-online-food-delivery-technology-abstract-logo-design-image_356588.jpg"
          alt=""
        />
        <h3>Other</h3>
      </div>
      <div className="links">
        <ul>
          <li>
            Swiggy Corporate
            <RiTv2Line />
          </li>
          <li>
            Search
            <RiSearch2Line />
          </li>
          <li>
            Offers
            <RiDiscountPercentLine />
          </li>
          <li>
            Help
            <RiLifebuoyLine />
          </li>
          <li>
            Cart
            <RiShoppingCart2Line />
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          setBtnLogin(btnLogin === "Login" ? "Sign in" : "Login");
        }}
      >
        <h4>{btnLogin}</h4>
      </button>
    </div>
  );
};

export default Navbar;
