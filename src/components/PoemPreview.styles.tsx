import { Stack, Typography, alpha, Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const PreviewContainer = styled(Stack)(({theme}) => ({
    flexDirection: "column",
    padding: "1.5em 0"
}));

export const Title = styled(Link)(({theme}) => ({
    fontSize: "1.5em",
    fontWeight: "bold",
    fontStyle: "italic",
    color: theme.palette.text.primary,
    textDecoration: "none",
    transition: "color 200ms ease",
    "&:hover": {
        color: theme.palette.primary.main
    }
}));

export const Author = styled(Typography)(({theme}) => ({
    marginTop: "0.25em",
    fontSize: "1em",
    textTransform: "uppercase",
    color: alpha(theme.palette.text.primary, 0.4)
}));

export const Excerpt = styled(Box)(({theme}) => ({
    marginTop: "0.5em",
    fontSize: "1em",
    color: alpha(theme.palette.text.primary, 0.8)
}));