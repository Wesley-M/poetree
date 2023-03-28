import { Stack, Typography } from '@mui/material';
import Leaf from '../static/images/leaf.svg';

export const NoPoemsFound = () => {
    return (
        <Stack direction="column" sx={{ alignItems: "center" }} spacing={2}>
            <img style={{ opacity: 0.8 }} src={Leaf} />
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    opacity: 0.5
                }}
            >
                No poem was found, please try some other <br />
                combination of filters :)
            </Typography>
        </Stack>
    );
}