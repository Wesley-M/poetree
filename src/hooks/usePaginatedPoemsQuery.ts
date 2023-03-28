import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PaginatedPoems } from "../api/types";

export const usePaginatedPoemsQuery = (queryKey: any[], queryFn: (page: number) => Promise<PaginatedPoems>) => {
    const [page, setPage] = useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const { data, isLoading } = useQuery(
        [...queryKey, page],
        () => queryFn(page),
        { keepPreviousData: true }
    );

    // Resets page to 1 when total pages change
    useEffect(() => {
        setPage(1);
    }, [data?.totalPages, ...queryKey]);

    return {
        page,
        data,
        handlePageChange,
        isLoading,
    };
}