"use server";

import {BoardDto} from "@/entities/board";
import {apiInstance} from '@/shared/db/axios';

export async function boardWriteApi(formData):Promise<string> => {
    await apiInstance.post('/board/insert', formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then(({data}) => {
        return 'success';
        // return data;
    })
}

export async function boardUpdateApi(query:Partial<BoardDto>={}) {
    await apiInstance.post('/board/update', convertFormData(query))
        .then(({data}) => {
            return data;
        }).finally(() => {});
}

const convertFormData = <T>(query:Partial<T>)=>{
    // const formData = new FormData();
    //
    // // 텍스트 데이터와 파일 데이터 추가
    // Object.keys(query).forEach((key) => {
    //     const value = query[key as keyof T];
    //
    //     if (value instanceof Array) {
    //         // FileList 처리 (파일 추가)
    //         value.forEach((file) => {
    //             if (file instanceof File) {
    //                 formData.append(key, file); // "attachFiles"로 모든 파일 추가
    //             }
    //         });
    //     }else if (value !== undefined && value !== null) {
    //         // 일반 텍스트 데이터 처리
    //         formData.append(key, value as string); // 배열이 아니면 일반 값 처리
    //     }
    // });
    //
    // // for (const [key, value] of formData.entries()) {
    // //     console.log('####### key value',key, value);
    // // }
    //
    // return formData;
}