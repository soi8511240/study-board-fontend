//
export const URL:string = 'http://localhost:8001';
export const DOMAIN:string = 'http://localhost:3000';
//
// /* axios */
export const API_URL:string = URL+'/api';
export const AXIOS_HEADERS:Record<string,string> = {
    // "X-Requested-With": "XMLHttpRequest",
    'Content-Type': 'application/json',
};

export const FETCH_COUNT = 10;

// const CONSTANTS = {
//     BASE_URL : 'http://localhost:8080',
//     BASE_DOMAIN : 'http://localhost:3000',
//     API_URL : 'http://localhost:3000/api',
//     AXIOS_HEADERS : { "X-Requested-With": "XMLHttpRequest" }
// } as const;
//
// export default CONSTANTS;