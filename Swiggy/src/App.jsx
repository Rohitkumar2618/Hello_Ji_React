import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

// !Props Concept
// 1-->way
// ? PAssing the props in parameter  and give property name to where we want to pass the data dynamically.--->    <h3 className="heading">{props.resName}</h3>

/*

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
        alt="Restaurant"
      />
      <div className="card-description">
     !   <h3 className="heading">{props.resName}</h3>
        <span className="card-rating">
       !   {props.rating} • {props.delvTime} Minutes
        </span>
        <span className="price">${props.price}</span>
      </div>
    </div>
  );
};


*/

// !Another way to passing the props to like this doing the destructuring

const RestaurantCard = (props) => {
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

const resData = [
  {
    name: "RK Restaurant",
    rating: 4.5,
    delvTime: 30,
    price: 20,
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG",
  },
  {
    name: "RK Restaurant",
    rating: 4.5,
    delvTime: 30,
    price: 20,
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG",
  },
];

const Body = () => {
  return (
    <div className="body">
      <input type="search" placeholder="Enter something Here" />
      <div className="res-container">
        <h3>Top restaurant chains in Mumbai</h3>
        <div className="cards">
          {resData.map((res, index) => (
            <RestaurantCard key={index} resData={res} />
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
