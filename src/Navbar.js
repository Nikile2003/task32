import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaEllipsisV } from "react-icons/fa";
import "./Navbar.css";

const App = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  // Function to redirect to Play Store
  const redirectToPlayStore = () => {
    window.location.href = "https://play.google.com/store/apps/details?id=com.flipkart.android";
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          Flipkart <span className="explore-plus">Explore Plus</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for Products, Brands and More" />
        </div>

        {/* Right Side Icons */}
        <div className="nav-right">
          {/* Login Dropdown - Hover Effect */}
          <div
            className="dropdown"
            onMouseEnter={() => setShowLoginDropdown(true)}
            onMouseLeave={() => setShowLoginDropdown(false)}
          >
            <button className="nav-item">
              <FaUser /> Login
            </button>
            {showLoginDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li>My Profile</li>
                  <li>Flipkart Plus Zone</li>
                  <li>Orders</li>
                  <li>Wishlist</li>
                  <li>Rewards</li>
                  <li>Gift Cards</li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="nav-item">
            <FaShoppingCart /> Cart
          </div>

          {/* Become a Seller */}
          <span className="nav-item">Become a Seller</span>

          {/* More Dropdown */}
          <div className="dropdown">
            <button
              className="nav-item"
              onClick={() => setShowMoreDropdown(!showMoreDropdown)}
            >
              <FaEllipsisV />
            </button>
            {showMoreDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li>Notification Preferences</li>
                  <li>24*7 Customer Care</li>
                  <li>Advertise</li>
                  <li onClick={redirectToPlayStore} style={{ cursor: "pointer", color: "blue" }}>
                    Download App
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
