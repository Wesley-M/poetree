import { PAGE_SIZE } from "../environment/config";
import { request } from "./request";
import { PaginatedPoems, PoemIdT, PoemT } from "./types";

export const findPoemById = async (id: string): Promise<PoemT> => {
    const response = await request.get(`/${id}`);
    return response.data;
}

export const findRandomPoemId = async (): Promise<PoemIdT> => {
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