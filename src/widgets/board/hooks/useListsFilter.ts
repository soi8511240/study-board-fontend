'use client';
/**
 * 검색 필터
 */

import {useCallback, useEffect, useState} from "react";
import { type listsRequestDTO ,type listsResponseVO} from '@/entities/board';
import { setFilter } from '@/widgets/board';
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";

import { type DomChangeEventType, type DomFormsTypes} from "@/shared";

const initialFilter: listsRequestDTO = {
    categoryId: "",
    keyword: "",
    fromDt: "",
    toDt: "",
    currentPage: 1
}

export function useListsFilter(){

    const {filter}  = useAppSelector((state) => state.board) as listsResponseVO;
    const dispatch = useAppDispatch();

    /* 필터 값 초기화 */
    const [filterValue, setFilterValue] = useState<listsRequestDTO>(filter as listsRequestDTO);

    /**
     * 필터 값 UPDATE
     * @param key
     * @param value
     */
    const updateFilterValue = (key:string, value: string | number) => {
        setFilterValue(() => ({
            ...filterValue,
            [key]: value
        }));
    };

    /**
     * 필터 RESET initialFilter
     */
    const resetFilter = () => {
        setFilterValue(initialFilter);
    };

    /**
     * 검색이벤트 함수
     */
    const handleSubmit = useCallback((params:listsRequestDTO = {})=>{
        dispatch(setFilter({...filter,...params}));
    },[filter]);

    /**
     * 필터 입력 필드의 변경 이벤트 처리 함수
     */
    const handleFilterValueChange:(e: DomChangeEventType) => void = (e: DomChangeEventType) =>
    {
        const { name, value } = e.target as DomFormsTypes;
        updateFilterValue(name, value);
    }

    /**
     * tmp - Filter 추적 로그용 useEffect
     */
    useEffect(() => {
        console.log('######', filter)
    },[filter])

    return {filterValue, handleFilterValueChange, handleSubmit, updateFilterValue, resetFilter};
}