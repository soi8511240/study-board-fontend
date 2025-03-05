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
        console.log('####', query)
        return this.api.get(`${this.uri}/lists`, {params:query})
            .then(({data}) => {
                return data;
            }).finally(() => {
            });
    }

}