import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Homepage from "../pages/Home/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <h2 className="text-4xl">404 Not found</h2>,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
        ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
]);
