import Post from "@ui/containers/Post";
import Posts from "@ui/containers/Posts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/:id",
    element: <Post />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
