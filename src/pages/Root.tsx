import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

export const Root = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}