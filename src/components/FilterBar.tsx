import { InitialLetterButton, Search, SearchIconWrapper, StyledInputBase } from "./FilterBar.styles";
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Stack } from "@mui/material";

type FilterBarProps = { 
    selectedInitial: string;
    onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    onInitialChange: (initial: string) => void; 
}

export const FilterBar = (props: FilterBarProps) => {
    const {
        selectedInitial,
        onQueryChange,
        onInitialChange,
    } = props;
    
    /**
     * used to generate the alphabet filter buttons
    */
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    return (
        <Stack direction="column">
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="What poem or poet do you feel like reading today ?"
                    inputProps={{ 'aria-label': 'search by poem title or poet name' }}
                    onChange={onQueryChange}
                />
            </Search>

            <Grid container spacing={1} sx={{ marginTop: "0.5em" }}>
               {alphabet.map((letter) => (
                    <Grid item key={letter}>
                        <InitialLetterButton 
                            onClick={() => onInitialChange(letter)}
                            selected={selectedInitial === letter}
                        >
                            {letter}
                        </InitialLetterButton>
                    </Grid>
               ))} 
            </Grid>
        </Stack>
    );
}