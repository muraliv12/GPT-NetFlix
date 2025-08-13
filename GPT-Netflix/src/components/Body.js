import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import WatchPage from "./WatchPage"; // Import new component
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch/:id", // New route
      element: <WatchPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
