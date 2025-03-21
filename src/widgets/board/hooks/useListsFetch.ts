import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {boardListsApi, type listsResponseVO} from '@/entities/board';
import {getAllBoard} from "@/widgets/board";
import {useCallback, useEffect} from "react";

export function useListsFetch() {
    // scope 를 좁게.. 다른걸로
    const {boardLists, totalCnt, filter} =
        useAppSelector((state) => state.board)
    const dispatch = useAppDispatch();

    const fetchData = useCallback(():Promise<listsResponseVO> => {
            try {
                console.log('fetchData', filter)
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
        console.log('#############useEffect ', boardLists)
    }, [filter]);

    return {boardLists, totalCnt};
}