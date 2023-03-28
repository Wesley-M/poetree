import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#011627'
        },
        text: {
            primary: '#282828',
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'PT Serif, serif',
            textTransform: 'none',
            fontSize: 16,
        },
    }
});