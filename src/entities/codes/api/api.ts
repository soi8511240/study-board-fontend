import {apiInstance} from "@/shared";
import {type Categories} from "./type";

export const boardCategoryApi = async ():Promise<Categories[]>=>{
    return apiInstance.get('/codes/categoryAll', {
        adapter: "fetch",
        fetchOptions: { cache: "reload" },
        // fetchOptions: { cache: "force-cache" }
    }).then(({data}) => {
        return data.data.category;
    }).finally(() => {});
}