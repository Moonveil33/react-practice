import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home/page";
import Products from "./pages/Products/page";
import Users from "./pages/Users/page";
import Tickets from "./pages/Tickets/page";
import TicketDetails from "./pages/TicketDetails/page";
import Comments from "./pages/Comments/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Layout
        <br />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "tickets/:ticketId",
        element: <TicketDetails />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
      {
        path: "/*",
        element: <div>NotFound</div>,
      },
    ],
  },
]);

export default router;
