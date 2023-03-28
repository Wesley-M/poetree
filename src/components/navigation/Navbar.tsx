import { Link, Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import { Logo } from "./Logo";
import { NavbarButton } from "./Navbar.styles";
import { Wrapper } from "../Wrapper";
import { useNavigate } from "react-router-dom";
import { useUrlListener } from "../../hooks/useUrlListener";

const Navbar = () => {
    const navigate = useNavigate();

    const urlIdx = useUrlListener(['/', '/poems/']);
    const isPoem = urlIdx === 1;

    return (
        <AppBar position="static" color="primary">
            <Wrapper>
                <Toolbar disableGutters>
                    <Logo />
                    <Box flex={1} />
                    <Stack direction="row" spacing={1}>
                        <NavbarButton onClick={() => navigate("poems/lucky")}>
                            FEELING LUCKY
                        </NavbarButton>
                        {isPoem &&
                            <NavbarButton onClick={() => navigate("/")}>
                                EXPLORE
                            </NavbarButton>
                        }
                    </Stack>

                </Toolbar>
            </Wrapper>
        </AppBar>
    );
};

export default Navbar;