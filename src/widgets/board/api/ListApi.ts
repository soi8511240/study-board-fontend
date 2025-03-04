import {AxiosInstance, AxiosRequestConfig} from "axios";
import {api as axiosInstance} from '@/shared/db/axios';

export class ListApi {
    protected api: AxiosInstance;
    private uri: string;

    constructor() {
        this.uri = '/board';
        this.api = axiosInstance;
    }

    async lists(query = {}, config: AxiosRequestConfig = {method: 'get'}): Promise<any> {
        return this.api.get(`${this.uri}/lists`, query)
            .then(({data}) => {
                return data;
            }).finally(() => {
            });
    }

    // async getBoardList(dto, config: AxiosRequestConfig = {}):Promise<any> {
    //     this.api.get(`${this.uri}`, dto)
    //         .then((r) => {
    //             return r;
    //         }).finally(() => {
    //     });
    // }

}