import { Box, Divider, Typography } from "@mui/material"
import { PoemT } from "../api/types";
import { Author, Excerpt, PreviewContainer, Title } from "./PoemPreview.styles";

type PoemPreviewProps = {
    poem: PoemT
}

const PoemPreview = (props : PoemPreviewProps) => {
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
            <Divider/>
            <PreviewContainer>
                <Title to={`poems/${poem._id}`}>{poem.title}</Title>
                <Author>By {poem.author}</Author>
                <Excerpt>{getExcerpt(poem.text).map(text => <Typography>{text}</Typography>)}</Excerpt>
            </PreviewContainer>
            <Divider/>
        </Box>
    )
}

export {
    PoemPreview
}