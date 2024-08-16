// !Another way to passing the props to like this doing the destructuring

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, rating, delvTime, price, url } = resData;

  return (
    <div className="res-card">
      <img src={url} alt="Restaurant" />
      <div className="card-description">
        <h3 className="heading">{name}</h3>
        <span className="card-rating">
          {rating} • {delvTime} Minutes
        </span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};
