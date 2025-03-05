import React, {useEffect, useState} from "react";

export function useInputTest(initialValue: string, submitAction: (message: string) => void)
    : [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void]
{
    const [inputValue, setInputValue] = useState<string>(initialValue);

    const handleInputValueChange =
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        }
    const handleSubmit = () => {
        submitAction(inputValue);
    }

    return [inputValue, handleInputValueChange, handleSubmit];
}


type domEventType = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
import {listsRequestDTO, setFilter} from '../index';
import {useAppDispatch, useAppSelector} from "@/app/hooks";

export function useFilter(
    initialValue:listsRequestDTO,
    submitAction: (obj: object) => void
):[
    listsRequestDTO,
    (e: domEventType) => void,
    () => void,
    (key: string, value: string | number) => void,
    () => void
] {
    const {filter} = useAppSelector((state) => state.board);
    const dispatch = useAppDispatch();

    const [filterValue, setFilterValue] = useState<listsRequestDTO>(filter);

    const updateFilterValue = (key: string, value: string | number) => {
        setFilterValue((oldVal) => ({
            ...oldVal,
            [key]: value,
        }));
    };
    const resetFilter = () => {
        setFilterValue(initialValue);
    };

    const handleSubmit = () => {
        console.log('submit', filterValue)
        submitAction(filterValue);
        dispatch(setFilter({filter:filterValue}));
    }

    const handleFilterValueChange:(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void =
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
            updateFilterValue(name, value);
        }
    useEffect(() => {
        console.log('filterValue', filterValue)
    })

    return [filterValue, handleFilterValueChange, handleSubmit, updateFilterValue, resetFilter];
}