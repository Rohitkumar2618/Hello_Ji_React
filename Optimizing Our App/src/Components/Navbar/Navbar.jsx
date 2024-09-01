import { useState } from "react";
import "./Navbar.css";
import {
  RiLifebuoyLine,
  RiTv2Line,
  RiSearch2Line,
  RiDiscountPercentLine,
  RiShoppingCart2Line,
} from "@remixicon/react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  const OnlineStatus = useOnlineStatus();

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
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart: {cartItems.length}</li>
          <li>Online Status: {OnlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
      <button
        onClick={() => {
          setBtnLogin(btnLogin === "Login" ? "Sign in" : "Login");
        }}
      >
        {btnLogin}
      </button>
    </div>
  );
};

export default Navbar;
