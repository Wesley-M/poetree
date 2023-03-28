import { Link, Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import { Logo } from "./Logo";
import { NavbarButton } from "./Navbar.styles";
import { Wrapper } from "../Wrapper";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="primary">
            <Wrapper>
                <Toolbar disableGutters>
                    <Logo />
                    <Box flex={1} />
                    <Stack direction="row" spacing={1}>
                        <NavbarButton onClick={() => navigate("poems/lucky")}>
                            Feeling lucky
                        </NavbarButton>
                    </Stack>

                </Toolbar>
            </Wrapper>
        </AppBar>
    );
};

export default Navbar;