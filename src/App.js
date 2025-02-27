import React from "react";
import Navbar from "./Navbar";  // Your existing Navbar
import Footer from "./Footer"; // Import Footer
import Body from "./Body"; // Import Body
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Main content */}
      <div className="content">
        <Body /> {/* Add Body Component Here */}
      </div>

      <Footer />  {/* Add Footer Here */}
    </div>
  );
}

export default App;
