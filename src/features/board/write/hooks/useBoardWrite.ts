'use client'

import {useRouter} from 'next/navigation';

import {useCallback, useEffect, useState} from "react";
import {boardWriteApi} from "@/features/board/write";

import {type DomChangeEventType, type DomFormsTypes, validation} from "@/shared";
import {type BoardDto} from "@/entities/board";

const initialWriteData:BoardDto ={
    title: '',
    writer: '',
    password: '',
    rePassword: '',
    content: '',
    categoryName: '',
    attachFiles: []
}

export function useBoardWrite(submitCallback:(message:string)=>void, initValues:BoardDto = initialWriteData) {

    const [writeData, setWriteData] = useState<Partial<BoardDto>>(initValues);
    const router = useRouter();

    useEffect(()=>{
        setWriteData(initValues);
    },[initValues])

    const fetchData = useCallback(():Promise<BoardDto> => {
            try {
                if (writeData.id) {
                    // update api 함수실행
                    // return boardWriteApi(writeData);
                }
                return boardWriteApi(writeData);
            } catch (error) {
                console.error('Failed to fetch list:', error);
                return Promise.reject(error);
            }
        }
        ,[writeData]
    )

    /**
     * 필터 입력 필드의 변경 이벤트 처리 함수
     */
    const handleValueChange:(e: DomChangeEventType) => void = (e: DomChangeEventType) => {
        //input file 처리
        if (e.target instanceof HTMLInputElement && e.target.type === 'file'){
            const { files } = e.target;
            if (files) {
                setWriteData((oldVal) => ({
                    ...oldVal,
                    attachFiles: [...(oldVal.attachFiles || []), ...files], // FileList -> 배열(File[]) 변환
                }));
            }

            return;
        }


        //input,select 처리
        const { name, value } = e.target as DomFormsTypes;
        setWriteData((oldVal) => ({
            ...oldVal,
            [name]: value,
        }));
    }

    const handleFileRemove = (index: number): void => {
        setWriteData((oldVal) => ({
            ...oldVal,
            attachFiles: oldVal.attachFiles?.filter((_, i) => i !== index),
        }));
    };


    const handleSubmit = useCallback(()=>{
        const validateResult = validation({id:'boardWrite',data:writeData});
        if (!validateResult.result) {
            submitCallback(validateResult.message);
            return
        }

        fetchData()
            .then((res) => {
                console.log('###', res)
                goDetailPage(res);
            })
    },[writeData])

    // const handleSubmit = ()=>{
    //     const validateResult = validation({id:'boardWrite',data:writeData});
    //     if (!validateResult.result) {
    //         submitCallback(validateResult.message);
    //         return
    //     }
    //
    //     fetchData()
    //         .then((res) => {
    //             console.log('###', res)
    //             // goDetailPage(res);
    //         })
    // }

    const goDetailPage = (res:string)=>{
        router.push(`/board/${res}`);
    }

    const goBackPage = ()=>{
        router.back();
    }

    return { writeData, handleValueChange, handleFileRemove, handleSubmit, goBackPage};
}

