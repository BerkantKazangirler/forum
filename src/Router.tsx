import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Comments from "./pages/comments";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/posts/:id",
      element: <Comments />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export { Router };
