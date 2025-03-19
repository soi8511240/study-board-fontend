import {apiInstance} from "@/shared";

export const getCategoriesApi = async (query={})=>{
    return apiInstance.get('/codes/categoryAll', {params:query})
        .then(({data}) => {
            return data.category;
        }).finally(() => {});
}