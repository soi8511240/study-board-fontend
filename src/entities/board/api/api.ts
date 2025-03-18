import {apiInstance} from '@/shared/db/axios';
import {listsResponseVO} from "@/entities/board";
//
// class Api {
//     protected api: AxiosInstance;
//     private uri: string;
//
//     constructor(uri:string) {
//         this.uri = uri;
//         this.api = apiInstance;
//     }
//
//     lists(query = {}, config: AxiosRequestConfig = {method: 'get'}): Promise<listsResponseVO> {
//         return this.api.get(`${this.uri}/lists`, {params:query})
//             .then(({data}) => {
//                 return data;
//             }).finally(() => {});
//     }
//
//     detailById(query:{id?:string} = {}, config: AxiosRequestConfig = {method: 'get'}):
//         Promise<listsBoardVO> {
//         return this.api.get(`${this.uri}/detail`, {params:query})
//             .then(({data}) => {
//                 return data;
//             }).finally(() => {});
//     }
// }

const boardListsApi = async (query={}):Promise<listsResponseVO>=>{
    return apiInstance.get('/board/lists', {params:query})
        .then(({data}) => {
            return data;
        }).finally(() => {});
}

const boardDetailApi = async (query={})=>{
    return apiInstance.get(`/board/detail`, {params:query})
        .then(({data}) => {
            return data;
        }).finally(() => {});
}

// const api = new Api('board');
export {boardListsApi, boardDetailApi};
