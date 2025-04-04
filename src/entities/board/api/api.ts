import {apiInstance} from '@/shared/db/axios';
import {BoardDto, type BoardListsResponse} from "@/entities/board";

const boardListsApi = async (query={}):Promise<BoardListsResponse>=>{
    return apiInstance.get('/board/lists', {params:query})
        .then(({data}) => {
            return data.data;
        }).finally(() => {})
}

const boardDetailApi = async (query={}):Promise<BoardDto>=>{
    return apiInstance.get(`/board/detail`, {params:query})
        .then(({data}) => {
            return data.data;
        }).finally(() => {});
}

// const api = new Api('board');
export {boardListsApi, boardDetailApi};
