import { Box, SxProps } from "@mui/material"

type WrapperProps = {
    children?: JSX.Element | JSX.Element[];
};

export const Wrapper = ({children} : WrapperProps) => {
    return (
        <Box
            sx={{
                margin: {xs: "0 1em", sm: "0 10em", lg: "0 15em"},
            }}
        >
            {children}
        </Box>
    )
}