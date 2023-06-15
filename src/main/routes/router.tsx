import Login from "@ui/containers/Login";
import Post from "@ui/containers/Post";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Posts from "@ui/containers/Posts";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<Post />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </>,
  ),
);
