import { Outlet } from "react-router-dom";
import Navbar from "../Navbar"
// import { CssBaseline } from "@mui/material";

const Layout = () => {
    return (
        <div>
            {/* <CssBaseline /> */}
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;