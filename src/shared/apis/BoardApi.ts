import {AxiosInstance, AxiosRequestConfig} from "axios";
import {api as axiosInstance} from '@/shared/axios';

export class BoardApi {
    protected api: AxiosInstance;
    private uri: string;

    constructor() {
        this.uri = '/board';
        this.api = axiosInstance;
    }

    async list(query = {}, config: AxiosRequestConfig = {method: 'get'}): Promise<any> {
        return this.api.get(`${this.uri}/lists`, query)
            .then((res) => {
                return res;
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