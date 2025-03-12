import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {getAllBoard, api, listsResponseVO} from "@/widgets/board";
import {useCallback, useEffect} from "react";

export function useListsFetch() {
    const {boardLists, totalCnt, filter} = useAppSelector((state) => state.board)
    const dispatch = useAppDispatch();

    const fetchData = useCallback(
        ():Promise<listsResponseVO> => {
            try {
                console.log('fetchData', filter)
                return api.lists(filter);
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
        console.log('boardLists', boardLists)
    }, [filter]);

    return {boardLists, totalCnt};
}