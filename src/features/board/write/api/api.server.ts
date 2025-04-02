'use server';

// import _ from 'lodash';
import {BoardDto} from '@/entities/board';
import {apiInstance} from '@/shared/db/axios';
import {redirect} from "next/navigation";

enum ResponseType {
    SUCCESS = 'success',
    FAIL = 'fail',
    ERROR = 'error',
}
type Response = {
    data: object,
    state: ResponseType,
    message: string,
}

export async function boardWriteApi(formData:FormData) {
    const response = await apiInstance.post('/board/insert', formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    if ('success' === response.data.state ) {
        const id = response.data.data;
        console.log('########## data', response.data.data, `${id}`)
        redirect(`/board/${id}`);
        // return id;
    }
    // .then((data) => {
    //     const id =data.data.data;
    //     console.log('########## data', data.data.data, `${id}`)
    //     redirect(`/board/detail/${id}`);
    //     // return data;
    //     // return data;
    // })
    // .catch(err => {
    //     return err.toString()
    // });

}

export async function boardUpdateApi(formData:FormData) {
    const response =  await apiInstance.post('/board/update', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    // validation //
    if ('success' === response.data.state) {
        const id = response.data.data;
        console.log('########## data', response.data.data, `${id}`)
        redirect(`/board/${id}`);
        // return id;
    }
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
    //                 formData.append(key, file); // 'attachFiles'로 모든 파일 추가
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