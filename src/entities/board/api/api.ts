import {apiInstance} from '@/shared/db/axios';
import {BoardDto, type BoardListsResponse} from "@/entities/board";

const boardListsApi = async (query={}):Promise<BoardListsResponse>=>{
    return apiInstance.get('/boards/lists', {params:query})
        .then(({data}) => {
            return data.data;
        }).finally(() => {})
}

const boardDetailApi = async (query:{id: string}={id:''}):Promise<BoardDto>=>{
    return apiInstance.get(`/boards/${query.id}`, {params:query})
        .then(({data}) => {
            return data.data;
        }).finally(() => {});
}

// const api = new Api('board');
export {boardListsApi, boardDetailApi};
