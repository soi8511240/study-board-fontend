'use client'

import {useCallback, useState} from "react";

import {type DomChangeEventType, type DomFormsTypes, validation} from "@/shared";
import {type BoardDto} from "@/entities/board";

const initialWriteData:BoardDto ={
    title: 'title test',
    writer: 'test writer',
    password: '12341234',
    rePassword: '12341234',
    content: 'content ',
    categoryName: '',
    attachFiles: []
}

export function useBoardWrite(submitAction:(param:BoardDto)=>void, initValues:BoardDto=initialWriteData) {
    // submitCallback -> onSubmit

    const initData = {...initialWriteData, initValues} ;
    const [writeData, setWriteData] = useState<BoardDto>(initData);

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
        // Todo: react hook form (lib)
        const validateResult = validation({id:'boardWrite',data:writeData});
        if (!validateResult.result) {
            submitAction(writeData);
            return
        }

    },[writeData])

    return { writeData, handleValueChange, handleFileRemove, handleSubmit};
}

