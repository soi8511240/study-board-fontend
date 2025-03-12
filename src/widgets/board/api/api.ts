import {AxiosInstance, AxiosRequestConfig} from "axios";
import {apiInstance} from '@/shared/db/axios';
import {listsBoardVO, listsResponseVO} from "@/widgets/board";

class Api {
    protected api: AxiosInstance;
    private uri: string;

    constructor(uri:string) {
        this.uri = uri;
        this.api = apiInstance;
    }

    lists(query = {}, config: AxiosRequestConfig = {method: 'get'}): Promise<listsResponseVO> {
        return this.api.get(`${this.uri}/lists`, {params:query})
            .then(({data}) => {
                return data;
            }).finally(() => {});
    }

    detailById(query:{id?:string} = {}, config: AxiosRequestConfig = {method: 'get'}):
        Promise<listsBoardVO> {
        return this.api.get(`${this.uri}/detail`, {params:query})
            .then(({data}) => {
                return data;
            }).finally(() => {});
    }
}
const api = new Api('board');
export {api};
