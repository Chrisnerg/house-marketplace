import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";

const App = () => {

  const router = createBrowserRouter([
    {path:'/', element: <Explore />},
  ]);
  
  return (
      <RouterProvider router={router}/>
  );
};

export default App;
