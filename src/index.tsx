import AllMovies from "pages/allMovies";
import ErrorPage from "pages/errorPage";
import SeriesPage from "pages/seriesPage";
import SingleMovie from "pages/singleMovie";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "shared-components/navBar";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movies",
    element: <AllMovies />,
    // children: [
    //   {
    //     path: "/movies/:movieId",
    //     element: <SingleMovie />,
    //   },
    // ],
  },
  {
    path: "series",
    element: <SeriesPage />,
  },
  {
    path: "Cartoons",
    element: <SeriesPage />,
  },
  {
    path: "movies/:movieId",
    element: <SingleMovie />,
  },
]);
const portalDiv = document.getElementById("root")!;
ReactDOM.createRoot(portalDiv).render(
  <>
    <NavBar />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
