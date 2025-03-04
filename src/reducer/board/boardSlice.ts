import {listsBoardVO, listsResponseVO} from "@/entities/board/model";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store'

// const initialState = {
//     lists: [],
//     pageCnt: 0
// } satisfies listsResponseVO as listsResponseVO;

const initialState:{
    boardLists: listsBoardVO[];
    totalCnt: number;
} = {
    boardLists: [],
    totalCnt: 0
} satisfies listsResponseVO as listsResponseVO;

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        getAllBoard: (state, action:PayloadAction<listsResponseVO>) => {
            state.boardLists = action.payload.boardLists;
            state.totalCnt = action.payload.totalCnt;
        }
    }
})

export const { getAllBoard } = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board
export default boardSlice.reducer;