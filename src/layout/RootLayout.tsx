import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar/Navbar";
import Footer from "../pages/Home/shared/Footer/Footer";


export default function RootLayout() {
    return (
        <div style={{ position: "relative" }}>
            <Navbar />
            <div className="outlet-container">
              <Outlet />
            </div>
            <Footer />
        </div>
    )
}
