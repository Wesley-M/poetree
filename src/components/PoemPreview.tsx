import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material"
import { PoemT } from "../api/types";
import { Author, Excerpt, PreviewContainer, Title } from "./PoemPreview.styles";

type PoemPreviewProps = {
    poem?: PoemT,
}

const PoemPreview = (props: PoemPreviewProps) => {
    const {
        poem
    } = props;

    const getExcerpt = (text: string): string[] => {
        const sentences = text.split("\r\n");
        const excerpt = sentences.slice(0, 2);
        const cleanExcerpt = excerpt.map(e => e.replace(/[^a-zA-Z0-9., ]/g, " "));
        return cleanExcerpt;
    }

    return (
        <Box>
            <Divider />
            <PreviewContainer>
                {poem ? (
                    <>
                        <Title to={`poems/${poem._id}`}>{poem.title}</Title>
                        <Author>By {poem.author}</Author>
                        <Excerpt>{getExcerpt(poem.text).map(text => <Typography>{text}</Typography>)}</Excerpt>
                    </>
                ) : (
                    <Stack direction="column" spacing={1}>
                        <Skeleton variant="rounded" width={300} height={20} />
                        <Skeleton variant="rounded" width={200} height={15} />
                        <Skeleton variant="rounded" width={350} height={10} />
                        <Skeleton variant="rounded" width={350} height={10} />
                    </Stack>
                )}
            </PreviewContainer>
            <Divider />
        </Box>
    )
}

export {
    PoemPreview
}