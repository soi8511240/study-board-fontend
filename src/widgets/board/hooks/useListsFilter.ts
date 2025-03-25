'use client';

import {useState} from "react";

import { type DomChangeEventType, type DomFormsTypes} from "@/shared";

/**
 * 검색 필터
 * Todo. 공통으로 사용가능할지? 어디까지 확장가능할지?
 * 혹시나 직렬화도 대응될까바 Json형태의 Object로 작성햇으나, 어떤부분을 더 고려해야할지 ....
 *
 */
export function useListsFilter<T extends { [key: string]: string }>
(filter:T, onSubmit:(filter: T)=>void){

    /* 필터 값 초기화 */
    const [filterValue, setFilterValue] = useState<T>(filter);

    /**
     * 필터 값 UPDATE
     * @param key
     * @param value
     */
    const updateFilterValue = (key: string, value: string) => {
        setFilterValue((oldVal) =>({
            ...oldVal, [key]: value
        }));
    }

    /**
     * 필터 RESET initialFilter
     */
    const resetFilter = () => {
        setFilterValue((prevState) => {
            const updatedState = { ...prevState };
            Object.keys(prevState!).forEach((key) => {
                /* 주입된 타입에 키를 보장하며 빈값(스트링)으로 만듬. */
                updatedState[key as keyof T] = '' as T[keyof T];
            })
            return updatedState;
        });
    };

    /**
     * 검색이벤트 함수
     */
    const handleSubmit = ()=>{
        onSubmit(filterValue);
    };

    /**
     * 필터 입력 필드의 변경 이벤트 처리 함수
     */
    const handleFilterValueChange:(e: DomChangeEventType) => void = (e: DomChangeEventType) =>
    {
        const { name, value } = e.target as DomFormsTypes;
        updateFilterValue(name, value);
    }

    return {filterValue, handleFilterValueChange, handleSubmit, updateFilterValue, resetFilter};
}