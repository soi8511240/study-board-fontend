/**
 * Codes Slicer
 */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { RootState } from '@/app/store/store'
import type { PayloadAction } from '@reduxjs/toolkit';
import { type Categories} from "../api/type";
import {boardCategoryApi} from "@/entities/codes";

const initialState = {
    category: [] as Categories[]
}

// 비동기 공통 데이터 로드
export const fetchCategories = createAsyncThunk(
    'code/fetchCategories',
    async () => {
        const response = await boardCategoryApi();
        return response;
    }
);

export const codesSlicer = createSlice({
    name: 'codes',
    initialState,
    reducers: {
        setCategories: (state, action:PayloadAction<Categories[]>) => {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Categories[]>) => {
                state.category = action.payload;
            });

    }
})

export const { setCategories } = codesSlicer.actions;

export const selectCodes = (state: RootState) => state.codes
export default codesSlicer.reducer;