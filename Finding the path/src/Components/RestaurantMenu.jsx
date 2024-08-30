import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1736783&lng=79.0427069&collection=119017&tags=layout_FestiveEvent7&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const dataJson = await data.json();

    console.log(dataJson); // Print the fetched menu data here
    setResInfo(dataJson.data.cards[2].card.card.info); // Update the state with the fetched restaurant data.
  };

  return (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <h2>Menu</h2>
      <p>Rating: {resInfo?.avgRatingString}</p>
      <p>Area: {resInfo?.areaName}</p>
      <p>Cuisines: {resInfo?.cuisines.join(", ")}</p>
      <p>Cost for Two: {resInfo?.costForTwo}</p>
      <ul>
        <li>Biriyani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
