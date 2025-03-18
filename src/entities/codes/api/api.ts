import {apiInstance} from "@/shared";

export const getCategoriesApi = async (query={})=>{
    return apiInstance.get('/api/codes/categoryAll', {params:query})
        .then(({data}) => {
            return data;
        }).finally(() => {});
}