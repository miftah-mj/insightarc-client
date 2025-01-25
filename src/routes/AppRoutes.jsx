import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <h2 className="text-4xl">404 Not found</h2>,
        element: <MainLayout />,
        children: [],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
]);
