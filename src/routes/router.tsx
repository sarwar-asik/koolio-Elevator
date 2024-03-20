import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "../enums/router-path";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: ROUTER_PATH.ROOT,
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])