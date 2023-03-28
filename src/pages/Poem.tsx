import { useParams } from "react-router-dom";
import { findPoemById, findRandomPoem } from "../api/poems";
import { useQuery } from '@tanstack/react-query';
import { alpha, Box, Skeleton, Stack, styled, Typography } from "@mui/material";
import { parsePoem } from "../utils/poems";

const Title = styled(Typography)(({ theme }) => ({
    fontSize: "2.5em",
    fontWeight: "bold",
    fontStyle: "italic",
    color: theme.palette.text.primary
}));

const Author = styled(Typography)(({ theme }) => ({
    marginTop: "0.25em",
    fontSize: "1.1em",
    textTransform: "uppercase",
    color: alpha(theme.palette.text.primary, 0.4)
}));

export const Poem = () => {
    const { poemId: id } = useParams();

    const { data: poem } = useQuery(['poem', id], () => findPoemById(id ?? ""), {
        refetchOnWindowFocus: false
    });

    const verseStyle = {
        color: "text.primary",
        fontSize: "1.1em",
        lineHeight: "175%",
        opacity: 0.9
    };

    return (
        <Box>
            {poem ? (<>
                <Title>{poem.title}</Title>
                <Author>By {poem.author}</Author>
                <Box sx={{ marginTop: "2.5em" }}>
                    {parsePoem(poem.text, verseStyle)}
                </Box>
            </>) : (
                <Stack direction="column">
                    <Skeleton height="5em" width="25em" />
                    <Skeleton height="2.5em" width="15em" />
                    <Typography><Skeleton height="10em" width="30em" /></Typography>
                    <Typography sx={{ marginTop: "-2em" }}><Skeleton height="10em" width="30em" /></Typography>
                    <Typography sx={{ marginTop: "-2em" }}><Skeleton height="10em" width="30em" /></Typography>
                </Stack>
            )}
        </Box>
    );
};