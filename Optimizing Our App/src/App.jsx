import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";

import ContactUs from "./Components/ContactUs";
import RestaurantMenu from "./Components/RestaurantMenu";
import { lazy, Suspense } from "react";

import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

const About = lazy(() => import("./Components/AboutUs"));

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Navbar />
        <Outlet />
        {/* <Body /> */}
      </Provider>

      {/* <Body /> */}
    </>
  );
}

export default App;

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
        element: (
          <Suspense fallback={<h1> Loading.....</h1>}>
            <About />
          </Suspense>
        ),
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
