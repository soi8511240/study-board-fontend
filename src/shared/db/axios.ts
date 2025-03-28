// API.js

// axios 의 인스턴스를 생성

import axios from 'axios';
import {API_URL, AXIOS_HEADERS} from '@/shared/constants/Constants';

console.log('API_URL', API_URL)
const apiInstance = axios.create({
    baseURL : API_URL,
    headers: AXIOS_HEADERS,
    // withCredentials: true,
});
//
// apiInstance.interceptors.request.use(function (config) {
//     return config;
// }, function (error) {
//     // 2. 요청 에러가 있는 작업 처리
//     return Promise.reject(error);
// });

apiInstance.interceptors.response.use(function (response) {
    // 응답 200번대 status일 때 응답 성공 직전 호출
    // 3. 이 작업 이후 .then()으로 이어진다
    console.log('response', response.data)
    return response;
}, function (error) {
    // 응답 200번대가 아닌 status일 때 응답 에러 직전 호출
    // 4. 이 작업 이후 .catch()로 이어진다
    return Promise.reject(error);
});


export { apiInstance };