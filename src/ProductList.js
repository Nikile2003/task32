import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ filters, addToCart }) => {
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: "iPhone 14", price: 79999, category: "Mobiles", image: "iphone.jpg" },
    { id: 2, name: "MacBook Air", price: 99999, category: "Laptops", image: "macbook.jpg" },
    { id: 3, name: "Sony Headphones", price: 4999, category: "Headphones", image: "sony.jpg" },
  ];

  const filteredProducts = products.filter((product) =>
    filters.category.length === 0 || filters.category.includes(product.category)
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
