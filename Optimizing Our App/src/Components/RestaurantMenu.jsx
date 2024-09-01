import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get the restaurant id from the URL parameter
  const resInfo = useRestaurantMenu(resId); // Use the hook to fetch restaurant data

  console.log(resInfo);

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
