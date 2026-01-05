import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import BuyPage from "./pages/BuyPage";

const App = () => {

  const router = createBrowserRouter([
    {path:'/', element: <Explore />},
    {path: '/signin', element: <SignIn />},
    {path: 'register', element: <Register />},
    {path: '/buy', element: <BuyPage />} 
  ]);
  
  return (
      <RouterProvider router={router}/>
  );
};

export default App;
