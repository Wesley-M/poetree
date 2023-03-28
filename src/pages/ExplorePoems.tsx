import { useCallback, useState } from "react";
import { findPoems } from "../api/poems";
import { FilterBar } from "../components/FilterBar";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { PoemPreview } from "../components/PoemPreview";
import { PoemT } from "../api/types";
import debounce from "lodash.debounce";
import { usePaginatedPoemsQuery } from "../hooks/usePaginatedPoemsQuery";
import { seq } from "../utils/arrays";
import { PAGE_SIZE } from "../environment/config";
import { NoPoemsFound } from "../components/NoPoemsFound";

const PoemsNumberStats = ({ totalPoems } : {totalPoems ?: number}) => {
    return (
        <>
            {totalPoems && totalPoems > 0 ? (
                <Typography 
                    sx= {{ 
                        marginBottom: "0.5em", 
                        opacity: 0.45,
                        fontFamily: "Roboto, sans-serif"
                    }}
                >
                    <span style={{ fontWeight: "bold"}}>{totalPoems}</span> poems were found
                </Typography>
            ) : null}
        </>
    );
}

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

    const { data, page, handlePageChange, isLoading } = usePaginatedPoemsQuery(
        ['poems', query, selectedInitial],
        (page: number) => findPoems(query, selectedInitial, page)
    );

    const poems = data?.docs;
    const hasPoems = poems && poems.length > 0;

    return (
        <Stack direction="column">
            <FilterBar
                selectedInitial={selectedInitial}
                onQueryChange={handleQueryChange}
                onInitialChange={handleInitialChange}
            />

            <Stack direction="column" sx={{ marginTop: "2em" }}>
                <PoemsNumberStats totalPoems={data?.totalDocs}/>

                {isLoading ? (
                    seq(0, PAGE_SIZE).map((i) => (
                        <PoemPreview key={i} />
                    ))
                ) : (
                    hasPoems ? (
                        poems.map((poem: PoemT) => (
                            <PoemPreview key={poem._id} poem={poem} />
                        ))
                    ) : (
                        <NoPoemsFound />
                    )
                )}
            </Stack>

            <Stack direction="row" sx={{ mt: "1em" }}>
                <Box sx={{ flexGrow: 1 }} />
                <Pagination count={data?.totalPages} page={page} onChange={handlePageChange} />
            </Stack>
        </Stack>
    );
}