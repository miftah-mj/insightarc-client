import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Homepage from "../pages/Home/Homepage";
import ErrorPage from "../pages/ErrorPage";
import AddArticle from "../pages/Articles/AddArticle";
import Articles from "../pages/Articles/Articles";
import ArticleDetails from "../pages/Articles/ArticleDetails";
import Subscription from "../pages/Subscription/Subscription";
import PremiumArticles from "../pages/PremiumArticles";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import MyArticles from "../pages/Articles/MyArticles";

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
                element: (
                    <PrivateRoute>
                        <AddArticle />
                    </PrivateRoute>
                ),
            },
            {
                path: "articles",
                element: <Articles />,
            },
            {
                path: "article/:id",
                element: <ArticleDetails />,
            },
            {
                path: "subscription",
                element: <Subscription />,
            },
            {
                path: "premium-articles",
                element: (
                    <PrivateRoute>
                        <PremiumArticles />
                    </PrivateRoute>
                ),
            },
            {
                path: "profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "my-articles",
                element: (
                    <PrivateRoute>
                        <MyArticles />
                    </PrivateRoute>
                ),
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
