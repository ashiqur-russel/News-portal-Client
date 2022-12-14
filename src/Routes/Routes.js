import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://dragon-news-server-steel-five.vercel.app/news"),
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => {
          return fetch(
            `https://dragon-news-server-steel-five.vercel.app/category/${params.id}`
          );
        },
      },

      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://dragon-news-server-steel-five.vercel.app/news/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);
