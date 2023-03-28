export type PoemT = {
    _id: string;
    title: string;
    text: string;
    author: string;
}

export type PoemIdT = Pick<PoemT, '_id'>;

export interface PaginatedPoems {
    totalDocs?: number;
    docs?: PoemT[];
    limit?: number;
    page?: number;
    nextPage?: number;
    prevPage?: number;
    hasNextPage?: boolean;
    hasPrevPage?: boolean;
    totalPages?: number;
    pagingCounter?: number;
}