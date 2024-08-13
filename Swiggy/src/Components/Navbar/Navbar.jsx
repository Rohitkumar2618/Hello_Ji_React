import "./Navbar.css";
import {
  RiLifebuoyLine,
  RiTv2Line,
  RiSearch2Line,
  RiDiscountPercentLine,
  RiShoppingCart2Line,
  RiUser3Line,
} from "@remixicon/react";

const Navbar = () => {
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
        <a href="">
          Swiggy Corporate
          <RiTv2Line />
        </a>

        <a href="">
          Search
          <RiSearch2Line />
        </a>
        <a href="">
          Offers
          <RiDiscountPercentLine />
        </a>
        <a href="">
          Help
          <RiLifebuoyLine />
        </a>
        <a href="">
          Sign in
          <RiUser3Line />
        </a>
        <a href="">
          Cart
          <RiShoppingCart2Line />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
