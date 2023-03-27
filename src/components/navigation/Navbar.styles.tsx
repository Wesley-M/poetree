import { Button, styled } from "@mui/material";

export const NavbarButton = styled(Button)(({ theme }) => ({
    fontSize: "1.05em",
    color: '#FFFFFFDD',
    '&:hover': {
        backgroundColor: '#00000020',
    }
}));