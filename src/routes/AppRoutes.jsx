import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <h2 className="text-4xl">404 Not found</h2>,
        element: <Home />,
    },
]);
