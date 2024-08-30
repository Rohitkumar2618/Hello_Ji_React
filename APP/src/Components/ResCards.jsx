import React, { useEffect, useState } from "react";

const ResCards = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460&collection=119017&tags=layout_FestiveEvent7&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const jsonData = await response.json();
      const restaurants = jsonData?.data?.cards[2]?.data?.data?.cards || [];

      // Process the data to match your component's requirements
      const formattedData = restaurants.map((restaurant) => ({
        name: restaurant?.data?.name,
        rating: restaurant?.data?.avgRating,
        delvTime: restaurant?.data?.deliveryTime,
        price: restaurant?.data?.costForTwo / 100, // assuming costForTwo is in paise
        url: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant?.data?.cloudinaryImageId}`,
      }));

      setResData(formattedData);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  return (
    <div className="Cards">
      {resData.length > 0 ? (
        resData.map((restaurant, index) => (
          <div className="resC" key={index}>
            <div className="Cardimg">
              <img src={restaurant.url} alt={restaurant.name} />
            </div>
            <div className="resInfo">
              <h3>{restaurant.name}</h3>
              <h4>Rating: {restaurant.rating}/5</h4>
              <p>Delivery Time: {restaurant.delvTime} minutes</p>
              <h2>Price: ${restaurant.price}</h2>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ResCards;
