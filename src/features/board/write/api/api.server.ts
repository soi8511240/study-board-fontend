'use server';

// import _ from 'lodash';
import {apiInstance} from '@/shared/db/axios';
import {redirect} from "next/navigation";

export async function boardWriteApi(formData:FormData) {
    const response = await apiInstance.post('/boards', formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return response.data;
    // if ('success' === response.data.state ) {
    //     const id = response.data.data;
    //     console.log('########## data', response.data.data, `${id}`)
    //     redirect(`/board/${id}`);
    //     // return id;
    // }
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

export async function boardUpdateApi({formData, id} : {formData:FormData, id:string}) {
    const response =  await apiInstance.put(`/boards/${id}`, formData, {
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
