import {apiInstance} from '@/shared/db/axios';

const boardWriteApi = async (query={})=>{
    return apiInstance.post('/board/insert', {params:query})
        .then(({data}) => {
            return data;
        }).finally(() => {});
}

export {boardWriteApi};
