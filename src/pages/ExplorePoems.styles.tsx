import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const PoemsContainer = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    [theme.breakpoints.up("xs")]: {
        margin: "5em 1em",
    },
    [theme.breakpoints.up("sm")]: {
        margin: "5em 10em",
    },
    [theme.breakpoints.up("lg")]: {
        margin: "5em 15em",
    }
}));