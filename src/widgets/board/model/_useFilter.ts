//
// /**
//  * 검색 필터
//  */
// import {atom} from 'jotai';
// import React, {useCallback, useEffect, useMemo} from "react";
// type domEventType = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
// import {listsRequestDTO, setFilterAtom, boardState, getFilterAtom, listsFilterAtom} from '@/widgets/board';
// import {useAppDispatch, useAppSelector} from "@/app/hooks";
// import {useSearchParams} from "next/navigation";
// type eventType = HTMLInputElement | HTMLSelectElement;
//
// const initialFilter: listsRequestDTO = {
//     categoryId: "",
//     keyword: "",
//     fromDt: "",
//     toDt: "",
//     currentPage: 1
// }
//
// export function useFilter(
//     // submitAction: (obj: object) => void=()=>{}
// )
// //     :[
// //     listsRequestDTO,
// //     (e: domEventType) => void,
// //     () => void,
// //     (key: string, value: string | number) => void,
// //     () => void
// // ]
// {
//     const [searchFilter, setSearchFilter] = useSearchParams();
//     const listsFilter = useMemo(() => atom({ listsFilterAtom }), [listsFilterAtom]);
//
//     useEffect(() => {
//         setFilterAtom(searchFilter);
//     }, [searchFilter]);
//
//     const handleEventChange = (e: domEventType) => {
//         const { name, value } = e.target as eventType;
//         setSearchFilter(name, value);
//     }
//
//     const updateFilterValue = useCallback(
//         (key:string, value: string | number) => {
//             setFilterValue(() => ({
//                 ...filter,
//                 [key]: value
//             }))},
//         [filter]
//     )
//     // const updateFilterValue = (key:string, value: string | number) => {
//     //     setFilterValue(() => ({
//     //         ...filter,
//     //         [key]: value
//     //     }));
//     // };
//     const resetFilter = () => {
//         setFilterValue(initialFilter);
//     };
//
//     const handleSubmit = useCallback(
//         (filter:listsRequestDTO)=>{
//
//             const newFilter = {...filterValue,...filter};
//             dispatch(setFilter(newFilter));
//
//         },[filterValue]);
//
//     const handleFilterValueChange:
//         (e: domEventType) => void = (e: domEventType) =>
//     {
//         const { name, value } = e.target as eventType;
//         updateFilterValue(name, value);
//     }
//
//     useEffect(() => {
//         console.log('######', filter)
//     },[filter])
//
//     return {filter, handleFilterValueChange, handleSubmit, updateFilterValue, resetFilter};
// }