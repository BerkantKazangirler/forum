import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./pages/list";
import Comments from "./pages/comments";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
    {
      path: "/posts/:id",
      element: <Comments />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export { Router };
