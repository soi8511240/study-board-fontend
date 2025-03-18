'use client'

import { useRouter } from 'next/navigation';

import {useCallback, useState} from "react";
import {boardWriteApi, type BoardDto} from "@/features/board/write";

import {type DomChangeEventType, type DomFormsTypes, validation} from "@/shared";

const initialWriteData:BoardDto ={
    title: '',
    writer: '',
    password: '',
    rePassword: '',
    content: '',
    categoryName: '',
}

export function useWrite(submitCallback:(message:string)=>void) {

    const [writeData, setWriteData] = useState<Partial<BoardDto>>(initialWriteData);
    const router = useRouter();

    const fetchData = useCallback(():Promise<BoardDto> => {
            console.log('##########', writeData)
            try {
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
        const { name, value } = e.target as DomFormsTypes;
        setWriteData((oldVal) => ({
            ...oldVal,
            [name]: value,
        }));
    }

    const handleSubmit = ()=>{
        const validateResult = validation({id:'boardWrite',data:writeData});
        if (!validateResult.result) {
            submitCallback(validateResult.message);
            return
        }

        fetchData()
            .then((res) => {
                console.log('###', res)
                // goDetailPage(res);
            })
    }

    const goDetailPage = (res:any)=>{
        router.push(`/board/detail/${res}`);
    }

    const goBackPage = ()=>{
        router.back();
    }

    // useEffect(() => {
    //     fetchData()
    //         .then((res) => {
    //             return setDetailResponse(res as detailResponseVO);
    //         })
    //         .catch((error) => {
    //             console.error("Failed to resolve promise:", error);
    //         });
    // }, []);

    return { writeData, handleValueChange, handleSubmit, goBackPage};
}

