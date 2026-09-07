import { createBrowserRouter, Outlet } from "react-router";
import CourseDetails from "./pages/CourseDetails";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Users from "./pages/dashboard/Users";
import Products from "./pages/dashboard/Products";
import Comments from "./pages/dashboard/Comments";
import UserDetails from "./pages/UserDetails";

const fetchUsers = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <div>This is /about page</div>,
      },
      {
        path: "services",
        element: <div>This is /services page</div>,
      },
      {
        path: "userdetails",
        element: <UserDetails />,
        loader: fetchUsers,
      },

      {
        path: "courses/:courseId",
        element: (
          // <PrivateRoute>
          <CourseDetails />
          // </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <NotFound />,
        handle: { hideFooter: true },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);

export default router;
