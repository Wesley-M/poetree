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

export const findAllPoems = async (): Promise<PoemT[]> => {
    const response = await request.get('/', {
        params: {
            offset: 0,
            limit: 10
        }
    });
    return response.data.docs;
}