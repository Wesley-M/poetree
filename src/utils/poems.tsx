import { SxProps, Theme, Typography } from '@mui/material';

export const parsePoem = (text?: string, verseStyle?: SxProps<Theme>) => {
    // Separate by line breaks
    const sentences = text?.split("\r\n");
    const fixedSentences = sentences?.map(s => s.trim());
    
    // Parse to Typography
    return fixedSentences?.map((s, idx) => {
        if (s) {
            return <Typography key={idx} sx={verseStyle}>{s}</Typography>;
        }
        return <br key={idx}/>;
    });
}