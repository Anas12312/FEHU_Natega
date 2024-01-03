import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/welcome/Welcome";
import Home from "../pages/home/Home";
import SingleGrade from "../pages/single-grade/SingleGrade";

const Router: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Welcome />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/grade/:id",
            element: <SingleGrade/>,
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Router;