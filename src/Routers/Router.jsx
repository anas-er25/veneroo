import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Home from "../components/Layouts/Landing/Home";
import Pricing from "../components/Layouts/Landing/Pricing";
import Blogs from "../components/Layouts/Landing/Blog/Blogs";
import Contact from "../components/Layouts/Landing/Contact";
import NotFound from "../components/Layouts/NotFound";
import BlogSingle from "../components/Layouts/Landing/Blog/BlogSingle";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/singleblog",
        element: <BlogSingle />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);