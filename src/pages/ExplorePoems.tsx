import { useCallback, useState } from "react";
import { findPoems } from "../api/poems";
import { FilterBar } from "../components/FilterBar";
import { PoemsContainer } from "./ExplorePoems.styles";
import {useQuery} from '@tanstack/react-query'
import { Stack } from "@mui/material";
import { PoemPreview } from "../components/PoemPreview";
import { PoemT } from "../api/types";
import debounce from "lodash.debounce";

export const ExplorePoems = () => {    
    /**
     * Query for searching poems by title or poet name
    */
    const [query, setQuery] = useState("");

    /**
     * Initial for filtering poems by title
    */
    const [selectedInitial, setSelectedInitial] = useState<string>([]);

    /**
     * Handles query change
    */
    const handleQueryChange = useCallback(debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }, 200), []);

    /**
     * Handles initial change (poem title)
    */
    const handleInitialChange = (initial: string) => {
        if (initial === selectedInitial) {
            setSelectedInitial("");
        } else {
            setSelectedInitial(initial);
        }
    }

    const { data } = useQuery(
        ['poems', query, selectedInitial], 
        () => findPoems(query, selectedInitial)
    );
    
    return (
        <PoemsContainer>
            <FilterBar 
                selectedInitial={selectedInitial}
                onQueryChange={handleQueryChange}
                onInitialChange={handleInitialChange}
            />

            <Stack direction="column" sx={{ marginTop: "2em" }}>
                {data?.map((poem: PoemT) => (
                    <PoemPreview key={poem._id} poem={poem}/>
                ))}
            </Stack>
        </PoemsContainer>
    );
}