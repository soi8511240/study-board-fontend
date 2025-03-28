/**
 * board Lists Reducer
 */

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '@/app/store/store'
import type { PayloadAction } from '@reduxjs/toolkit';
import { type BoardListsFilter, type BoardListsResponse} from "@/entities/board";

// const initialState = {
//     lists: [],
//     pageCnt: 0
// } satisfies BoardListsResponse as BoardListsResponse;

const initialState:BoardListsResponse = {
    boardLists: [],
    totalCnt: 0,
    filter:{
        categoryId: "",
        keyword: "",
        fromDt: "",
        toDt: "",
        currentPage : '1',
    }
};

export const boardSlicer = createSlice({
    name: 'board',
    initialState,
    reducers: {
        getAllBoard: (state, action:PayloadAction<BoardListsResponse>) => {
            state.boardLists = action.payload.boardLists;
            state.totalCnt = action.payload.totalCnt;
        },
        setFilter: (state, action:PayloadAction<BoardListsFilter>) => {
            state.filter = action.payload;
        }
    }
})

export const { getAllBoard, setFilter } = boardSlicer.actions;

export const selectBoard = (state: RootState) => state.board
export default boardSlicer.reducer;