import { Button, styled } from "@mui/material";

export const NavbarButton = styled(Button)(({ theme }) => ({
    fontSize: "1.05em",
    fontFamily: "Roboto, sans-serif",
    color: '#FFFFFFAA',
    '&:hover': {
        backgroundColor: '#00000020',
        color: '#FFFFFFCC',
    }
}));