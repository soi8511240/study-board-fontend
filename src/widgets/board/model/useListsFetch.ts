import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {getAllBoard, ListApi} from "../index";
import {useEffect} from "react";

export function useListsFetch() {
    const {boardLists, totalCnt, filter} = useAppSelector((state) => state.board)
    const dispatch = useAppDispatch();

    const api = new ListApi();
    const fetchData = async () => {
        try {
            console.log('fetchData', filter)
            const data = await api.lists(filter);
            dispatch(getAllBoard(data));
        } catch (error) {
            console.error('Failed to fetch list:', error);
        }
    };

    useEffect( () => {
        fetchData();
        console.log('boardLists', boardLists)
    }, [filter]);

    return {boardLists, totalCnt};
}