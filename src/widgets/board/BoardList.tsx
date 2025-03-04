'use client'

import React, {useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks';

import { BoardApi } from '@/shared';
import { getAllBoard } from '@/reducer/board/boardSlice';

import { List } from '@/widgets/board/';

export default function BoardList() {
    const {boardLists, totalCnt} = useAppSelector((state) => state.board)
    const dispatch = useAppDispatch();

    const api = new BoardApi();
    const fetchData = async () => {
        try {
            const { data } = await api.lists();
            dispatch(getAllBoard(data));
        } catch (error) {
            console.error('Failed to fetch list:', error);
        }
    };

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <>
            <div>PostList</div>
            <List
                totalCnt={totalCnt}
                list={boardLists} />
        </>
    );
}