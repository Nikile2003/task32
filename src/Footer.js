import React from "react";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Company Info</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>

          <h3>Payment Methods</h3>
          <div className="payment-icons">
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="MasterCard" />
            <img src="paypal.png" alt="PayPal" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        © 2025 Flipkart Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
