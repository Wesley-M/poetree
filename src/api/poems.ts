import { request } from "./request";
import { PoemT } from "./types";

export const findPoemById = async (id: string): Promise<PoemT> => {
    const response = await request.get(`/${id}`);
    return response.data;
}

export const findRandomPoem = async (): Promise<PoemT> => {
    const response = await request.get('/lucky');
    return response.data;
}

export const findPoems = async (query: string, selectedInitial: string): Promise<PoemT[]> => {    
    const response = await request.get(`/search?q=${query}&i=${selectedInitial}`);
    return response.data.docs;
}