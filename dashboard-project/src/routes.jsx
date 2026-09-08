import { createBrowserRouter, Outlet } from "react-router";

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
        element: <div>HomePage</div>,
      },
      {
        path: "products",
        element: <div>Products</div>,
      },
      {
        path: "users",
        element: <div>users</div>,
      },
      {
        path: "tickets",
        element: <div>tickets</div>,
      },
      {
        path: "tickets/:ticketId",
        element: <div>TicketDetails</div>,
      },
      {
        path: "comments",
        element: <div>Comments</div>,
      },
      {
        path: "/*",
        element: <div>NotFound</div>,
      },
    ],
  },
]);

export default router;
