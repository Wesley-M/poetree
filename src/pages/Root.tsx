import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import { Wrapper } from "../components/Wrapper";

export const Root = () => {
    return (
        <>
            <Navbar/>
            <Box sx={{ pt: "5em" }}/>
            <Wrapper>
                <Outlet/>
            </Wrapper>
            <Box sx={{ pb: "5em" }}/>
        </>
    );
}