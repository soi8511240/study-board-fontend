/**
 * board Lists Reducer
 */

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '@/app/store'
import type { PayloadAction } from '@reduxjs/toolkit';
import { listsRequestDTO, listsResponseVO} from "@/entities/board";

// const initialState = {
//     lists: [],
//     pageCnt: 0
// } satisfies listsResponseVO as listsResponseVO;

const initialState:listsResponseVO = {
    boardLists: [],
    totalCnt: 0,
    filter:{
        categoryId: "",
        keyword: "",
        fromDt: "",
        toDt: "",
        currentPage : 1,
    }
};

export const boardSlicer = createSlice({
    name: 'board',
    initialState,
    reducers: {
        getAllBoard: (state, action:PayloadAction<listsResponseVO>) => {
            state.boardLists = action.payload.boardLists;
            state.totalCnt = action.payload.totalCnt;
        },
        setFilter: (state, action:PayloadAction<listsRequestDTO>) => {
            state.filter = action.payload;
        }
    }
})

export const { getAllBoard, setFilter } = boardSlicer.actions;

export const selectBoard = (state: RootState) => state.board
export default boardSlicer.reducer;