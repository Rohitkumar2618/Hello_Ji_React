import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1736783&lng=79.0427069&collection=119017&tags=layout_FestiveEvent7&sortBy=&filters=&type=rcv2&offset=0&page_type=null&resId=${resId}`
    );
    const dataJson = await data.json();

    console.log(dataJson); // Print the fetched menu data here
    setResInfo(dataJson.data.cards[2].card.card.info); // Update the state with the fetched restaurant data.
  };

  return resInfo;
};

export default useRestaurantMenu;
