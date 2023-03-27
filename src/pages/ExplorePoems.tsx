import { useState } from "react";
import { findAllPoems } from "../api/poems";
import { FilterBar } from "../components/FilterBar";
import { PoemsContainer } from "./ExplorePoems.styles";
import {useQuery,} from '@tanstack/react-query'
import { Stack } from "@mui/material";
import { PoemPreview } from "../components/PoemPreview";
import { PoemT } from "../api/types";

export const ExplorePoems = () => {
    /**
     * Query for searching poems by title or poet name
    */
    const [query, setQuery] = useState("");

    /**
     * Initials for filtering poems by title
    */
    const [selectedInitials, setSelectedInitials] = useState<string[]>([]);

    /**
     * Handles query change
    */
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    /**
     * Handles initials change
    */
    const handleInitialsChange = (initial: string) => {
        if (selectedInitials.includes(initial)) {
            setSelectedInitials(selectedInitials.filter((i) => i !== initial));
        } else {
            setSelectedInitials([...selectedInitials, initial]);
        }
    }

    const { data } = useQuery(['poems'], findAllPoems);
    
    return (
        <PoemsContainer>
            <FilterBar 
                query={query}
                onQueryChange={handleQueryChange}
                onInitialsChange={handleInitialsChange}
            />

            <Stack direction="column" sx={{ marginTop: "2em" }}>
                {data?.map((poem: PoemT) => (
                    <PoemPreview key={poem._id} poem={poem}/>
                ))}
            </Stack>
        </PoemsContainer>
    );
}