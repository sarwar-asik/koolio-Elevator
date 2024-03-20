import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar/Navbar";


export default function RootLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />

        </div>
    )
}
