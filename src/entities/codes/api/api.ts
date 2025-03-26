import {apiInstance} from "@/shared";
import {type Categories} from "./type";

export const boardCategoryApi = async ():Promise<Categories[]>=>{
    return apiInstance.get('/codes/categoryAll', {
        // adapter: "fetch",
        // fetchOptions: { cache: "force-cache" }
    }).then(({data}) => {
        console.log('category:', data)
        return data.category;
    }).finally(() => {});
}