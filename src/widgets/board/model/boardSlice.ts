import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '@/app/store'
import type { PayloadAction } from '@reduxjs/toolkit';
import {listsBoardVO, listsRequestDTO, listsResponseVO} from "../index";

// const initialState = {
//     lists: [],
//     pageCnt: 0
// } satisfies listsResponseVO as listsResponseVO;

interface boardState {
    boardLists: listsBoardVO[];
    totalCnt: number;
    filter: listsRequestDTO;
}

const initialState:boardState = {
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

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        getAllBoard: (state, action:PayloadAction<boardState>) => {
            state.boardLists = action.payload.boardLists;
            state.totalCnt = action.payload.totalCnt;
        },
        setFilter: (state, action:PayloadAction<boardState>) => {
            state.filter = action.payload.filter;
        }
    }
})

export const { getAllBoard, setFilter } = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board
export default boardSlice.reducer;