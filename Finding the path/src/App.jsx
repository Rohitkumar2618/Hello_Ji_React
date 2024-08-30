import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import RestaurantMenu from "./Components/RestaurantMenu";

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

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Body /> */}
    </>
  );
}

export default App;

// export const appRoute = createBrowserRouter([
//   {
//     path: "/",
//     exact: true,
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         exact: true,
//         element: <Body />,
//       },

//       {
//         path: "/about",
//         exact: true,
//         element: <AboutUs />,
//       },
//       {
//         path: "/contact",
//         exact: true,
//         element: <ContactUs />,
//       },
//     ],

//     errorElement: "error",
//   },
// ]);

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        exact: true,
      },

      {
        path: "/about",
        element: <AboutUs />,
        exact: true,
      },
      {
        path: "/contact",
        element: <ContactUs />,
        exact: true,
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
        exact: true,
      },
    ],
  },
]);
