
// export function useInputTest(initialValue: string, submitAction: (message: string) => void)
//     : [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void]
// {
//     const [inputValue, setInputValue] = useState<string>(initialValue);
//
//     const handleInputValueChange =
//         (e: React.ChangeEvent<HTMLInputElement>) => {
//             setInputValue(e.target.value);
//         }
//     const handleSubmit = () => {
//         submitAction(inputValue);
//     }
//
//     return [inputValue, handleInputValueChange, handleSubmit];
// }
/**
 * 검색 필터
 */

import React, {useCallback, useEffect, useState} from "react";
type domEventType = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
import {listsRequestDTO, setFilter} from '@/widgets/board';
import {useAppDispatch, useAppSelector} from "@/app/hooks";
type eventType = HTMLInputElement | HTMLSelectElement;

const initialFilter: listsRequestDTO = {
    categoryId: "",
    keyword: "",
    fromDt: "",
    toDt: "",
    currentPage: 1
}

export function useListsFilter(
    // submitAction: (obj: object) => void=()=>{}
)
//     :[
//     listsRequestDTO,
//     (e: domEventType) => void,
//     () => void,
//     (key: string, value: string | number) => void,
//     () => void
// ]
{
    const {filter}  = useAppSelector((state) => state.board);
    const dispatch = useAppDispatch();

    const [filterValue, setFilterValue] = useState<listsRequestDTO>(filter as listsRequestDTO);
    // const [filterValue, setFilterValue] = useAtom<listsRequestDTO>(filter);

    // const updateFilterValue = useCallback(
    //     (key:string, value: string | number) => {
    //         setFilterValue(() => ({
    //             ...filter,
    //             [key]: value
    //         }))},
    //     [filter]
    // )
    const updateFilterValue = (key:string, value: string | number) => {
        setFilterValue(() => ({
            ...filter,
            [key]: value
        }));
    };
    const resetFilter = () => {
        setFilterValue(initialFilter);
    };

    const handleSubmit = useCallback(
        (params:listsRequestDTO)=>{
            dispatch(setFilter({...filter,...params}));
        },[filter]);

    const handleFilterValueChange:(e: domEventType) => void = (e: domEventType) =>
    {
        const { name, value } = e.target as eventType;
        updateFilterValue(name, value);
    }

    useEffect(() => {
        console.log('######', filter)
    },[filter])

    return {filterValue, handleFilterValueChange, handleSubmit, updateFilterValue, resetFilter};
}