import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import BuyPage from "./pages/BuyPage";
import Layout from "./components/layout/Layout";
import SellPage from "./pages/SellPage";
import RentPage from "./pages/RentPage";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index: true, element: <Explore />},
        {path: '/user/signin', element: <SignIn />},
        {path: '/user/register', element: <Register />},
        {path: '/user/buy', element: <BuyPage />},
        {path: '/user/sell', element: <SellPage />},
        {path: '/user/rent', element: <RentPage />}
      ],
    },
  ]);
  
  return (
      <RouterProvider router={router}/>
  );
};

export default App;
