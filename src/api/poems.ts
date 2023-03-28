import { PAGE_SIZE } from "../environment/config";
import { request } from "./request";
import { PaginatedDocs, PaginatedPoems, PoemT } from "./types";

export const findPoemById = async (id: string): Promise<PoemT> => {
    const response = await request.get(`/${id}`);
    return response.data;
}

export const findRandomPoem = async (): Promise<PoemT> => {
    const response = await request.get('/lucky');
    return response.data;
}

export const findPoems = async (query: string, selectedInitial: string, page: number): Promise<PaginatedPoems> => {    
    const offset = (page - 1) * PAGE_SIZE;
    
    const response = await request.get("/search", {
        params: {
            q: query,
            i: selectedInitial,
            offset,
            limit: PAGE_SIZE
        }
    });
    
    return response.data;
}