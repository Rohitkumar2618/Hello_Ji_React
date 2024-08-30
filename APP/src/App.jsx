import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import RestaurantCard from "./Components/RestaurantCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <RestaurantCard />
    </div>
  );
};

export default App;
