// API.js

// axios 의 인스턴스를 생성

import axios from 'axios';
import {API_URL,AXIOS_HEADERS} from '@/shared/Constants';

export const api = axios.create({
    baseURL : API_URL,
    headers: AXIOS_HEADERS,
    withCredentials: true,
});
