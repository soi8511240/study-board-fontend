import {apiInstance} from "@/shared";
import {type Categories} from "./type";

export const boardCategoryApi = async ():Promise<Categories[]>=>{
    return apiInstance.get('/codes/categoryAll', {
        adapter: "fetch",
        fetchOptions: { cache: "reload" },
        // Todo: 캐시영역을 정확이 알아봅시다.
        // fetchOptions: { cache: "force-cache" }
    }).then(({data}) => {
        return data.data.category;
    }).finally(() => {});
}