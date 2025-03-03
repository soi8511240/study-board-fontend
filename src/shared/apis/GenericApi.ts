import {AxiosInstance, AxiosRequestConfig} from "axios";
import {api} from '@/shared/axios';

export default class GenericApi {
    protected api: AxiosInstance;

    protected constructor(readonly uri: string) {
        this.uri = uri;
        this.api = api;
    }

    // 리스트 api
    list(query = {}, config: AxiosRequestConfig = {method: 'get'}): Promise<any> {
        return this.api.get(this.uri, query)
            .then((r) => {
                return r;
            }).finally(() => {

            });
    }


    before(name: string, ...rest: any) {

    }

    after(name: string, ...rest: any) {

    }
}
