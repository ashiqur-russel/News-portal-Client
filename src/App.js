import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./Routes/Routes";

function App() {
  /*   const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/category/:id",
          element: <Category></Category>,
        },

        {
          path: "/news/:id",
          element: <News></News>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]); */

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
