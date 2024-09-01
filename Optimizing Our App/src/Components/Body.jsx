import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { resData } from "../utils/metaData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);
  const [filteredRestaurants, setFilteredRestaurants] = useState(resData);
  const [searchText, setSearchText] = useState("");

  // Uncomment useEffect and fetchData if you want to fetch data from an API
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //     );

  //     const json = await data.json();

  //     const restaurants =
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants || [];

  //     setListOfRestaurants(restaurants);
  //     setFilteredRestaurants(restaurants);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  //! Function to filter restaurants with a rating greater than 4

  const restaurantFilterHandler = () => {
    const filteredRes = listOfRestaurants.filter((res) => res.rating > 4);
    setFilteredRestaurants(filteredRes);
  };

  //! Function to handle search
  const handleSearch = () => {
    const filteredSearch = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredSearch);
  };

  // Conditional rendering
  if (listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <input
        type="search"
        placeholder="Enter something here"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
      <div className="res-container">
        <h3>Top Restaurant Chains in Mumbai</h3>
        <button className="filtered-btn" onClick={restaurantFilterHandler}>
          Filter the Restaurants
        </button>
        <div className="cards">
          {filteredRestaurants.map((res, index) => (
            <RestaurantCard key={index} resData={res} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
