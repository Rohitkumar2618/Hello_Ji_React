import { useState } from "react";
import { resData } from "../utils/metaData";
import { RestaurantCard } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  const filterHandler = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res.rating > 4
    );
    setListOfRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      <input type="search" placeholder="Enter something here" />
      <div className="res-container">
        <h3>Top Restaurant Chains in Mumbai</h3>
        <button className="filtered-btn" onClick={() => filterHandler()}>
          Filter the Restaurants
        </button>
        <div className="cards">
          {listOfRestaurants.map((res, index) => (
            <RestaurantCard key={index} resData={res} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
