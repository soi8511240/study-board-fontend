'use client'

import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {boardListsApi, type BoardListsResponse} from '@/entities/board';
import {getAllBoard} from "@/widgets/board";
import {useCallback, useEffect} from "react";

export function useListsFetch() {
    // scope 를 좁게.. 다른걸로
    const {boardLists, totalCnt, filter} =
        useAppSelector((state) => state.board)
    const dispatch = useAppDispatch();

    const fetchData = useCallback(():Promise<BoardListsResponse> => {
            try {
                return boardListsApi(filter);
            } catch (error) {
                console.error('Failed to fetch list:', error);
                return Promise.reject(error);
            }
        }
        ,[filter]
    )

    useEffect( () => {
        fetchData()
            .then(res => {
                dispatch(getAllBoard(res));
            });
    }, [filter]);

    return {boardLists, totalCnt};
}