import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Homepage from "../pages/Home/Homepage";
import ErrorPage from "../pages/ErrorPage";
import AddArticle from "../pages/Articles/AddArticle";
import AllArticles from "../pages/Articles/AllArticles";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "add-article",
                element: <AddArticle />,
            },
            {
                path: "all-articles",
                element: <AllArticles />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);
