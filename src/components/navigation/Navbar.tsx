import { Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import { Logo } from "./Logo";
import { NavbarButton } from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />
                    <Box flex={1} />
                    <Stack direction="row" spacing={1}>
                        <NavbarButton>
                            About
                        </NavbarButton>
                        <NavbarButton href="/poems/lucky">
                            Feeling lucky
                        </NavbarButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;