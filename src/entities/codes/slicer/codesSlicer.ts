/**
 * Codes Slicer
 */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { RootState } from '@/app/store'
import type { PayloadAction } from '@reduxjs/toolkit';
import { type Categories} from "../api/type";
import axios from "axios";

const initialState:Categories[] = []

// 비동기 공통 데이터 로드
export const fetchCategories = createAsyncThunk(
    "code/fetchCategories",
    async () => {
        const response = await axios.get("/api/categories"); // 실제 API 호출
        return response.data;
    }
);

export const codesSlicer = createSlice({
    name: 'codes',
    initialState,
    reducers: {
        getCategories: (state, action:PayloadAction<Categories[]>) => {
            state = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.rejected, (state, action) => {
            });
    }
})

export const { getCategories } = codesSlicer.actions;

export const selectCodes = (state: RootState) => state.codes
export default codesSlicer.reducer;