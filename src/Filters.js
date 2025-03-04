import React from 'react';

const Filters = ({ selectedCategory, setSelectedCategory, setPriceRange, setBrand, setRating }) => {
  return (
    <div className="filters">
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home & Furniture">Home & Furniture</option>
        <option value="Appliances">Appliances</option>
      </select>

      <select onChange={(e) => setPriceRange(e.target.value)}>
        <option value="">Price Range</option>
        <option value="0-5000">₹0 - ₹5000</option>
        <option value="5000-20000">₹5000 - ₹20000</option>
        <option value="20000-50000">₹20000 - ₹50000</option>
        <option value="50000+">₹50000+</option>
      </select>

      <select onChange={(e) => setBrand(e.target.value)}>
        <option value="">Brand</option>
        <option value="Samsung">Samsung</option>
        <option value="Apple">Apple</option>
        <option value="Nike">Nike</option>
        <option value="LG">LG</option>
        <option value="Sony">Sony</option>
      </select>

      <select onChange={(e) => setRating(e.target.value)}>
        <option value="">Rating</option>
        <option value="4.0">4.0 & above</option>
        <option value="4.5">4.5 & above</option>
        <option value="5.0">5.0</option>
      </select>
    </div>
  );
};

export default Filters;
