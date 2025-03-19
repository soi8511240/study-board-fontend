import {apiInstance} from '@/shared/db/axios';

export const boardWriteApi = async (query={})=>{
    console.log('################',query)
    return apiInstance.post('/board/insert', {params:query},
        {
            params:query,
        })
        .then(({data}) => {
            return data;
        }).finally(() => {});
}

export const boardUpdateApi = async (query={})=>{
    return apiInstance.post('/board/update', {params:query},
        {
            params:query
        })
        .then(({data}) => {
            return data;
        }).finally(() => {});
}


