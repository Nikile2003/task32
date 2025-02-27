import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.css";

const Body = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { name: "Fashion", img: "/fashion.png", submenu: ["Men", "Women", "Kids", "Accessories", "Footwear"] },
    { name: "Electronics", img: "/electronics.png", submenu: ["Mobiles", "Laptops", "Cameras", "Headphones", "Smartwatches"] },
    { name: "Home & Furniture", img: "/home.png", submenu: ["Sofas", "Beds", "Dining", "Decor", "Kitchenware"] },
    { name: "Appliances", img: "/appliances.png", submenu: ["Televisions", "Refrigerators", "Washing Machines", "Microwaves", "ACs"] },
    { name: "Grocery", img: "/grocery.png", submenu: ["Dairy", "Beverages", "Snacks", "Fruits & Vegetables", "Staples"] },
  ];

  const bannerImages = ["/banner1.png", "/banner2.png", "/banner3.png"];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables auto slide
    autoplaySpeed: 3000, // Auto slide every 3 seconds
    arrows: true, // Enables arrows
    pauseOnHover: false,
  };

  return (
    <div className="body-container">
      {/* Categories Section */}
      <div className="categories">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category"
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>

            {/* Dropdown Menu */}
            {hoveredCategory === category.name && (
              <div className="dropdown-menu">
                {category.submenu.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Banner Section (Carousel) */}
      <div className="banner">
        <Slider {...sliderSettings}>
          {bannerImages.map((image, index) => (
            <div key={index} className="banner-slide">
              <img src={image} alt={`Banner ${index + 1}`} className="banner-img" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Best of Electronics Section */}
      <div className="electronics-section">
        <h2>Best of Electronics</h2>
        <div className="electronics-items">
          <div className="item">
            <img src="/phones.png" alt="Mobile" />
            <p>Best Selling Mobiles</p>
          </div>
          <div className="item">
            <img src="/projector.png" alt="Projector" />
            <p>Projectors</p>
          </div>
          <div className="item">
            <img src="/camera.png" alt="Camera" />
            <p>Mirrorless Cameras</p>
          </div>
          <div className="item">
            <img src="/laptop.png" alt="Laptop" />
            <p>Gaming Laptops</p>
          </div>
          <div className="item">
            <img src="/headphones.png" alt="Headphones" />
            <p>Wireless Headphones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
