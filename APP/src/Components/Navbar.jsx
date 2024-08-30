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
      <div>
        <input type="text" placeholder="Search something here" />
      </div>
      <div className="links">
        <a href="">Home</a>

        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Cart</a>
      </div>
    </div>
  );
};

export default Navbar;
