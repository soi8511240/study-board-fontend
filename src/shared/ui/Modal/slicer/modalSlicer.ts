/**
 * Modal Slicer
 */

import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from '@/app/store/store'
import type { PayloadAction } from '@reduxjs/toolkit';
import {JSX} from "react";

export type ModalState = {
    type?: 'Alert' | 'Modal' | 'Custom';
    open?: boolean;
    title?: string;
    message?: string;
    component?: JSX.Element | null;
}

const initialState:ModalState = {
    type: 'Alert',
    open: false,
    title: '알림',
    message: '',
    component: null
}

export const modalSlicer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action:PayloadAction<ModalState>) => {
            console.log('################## reducers', action.payload);
            Object.assign(state, action.payload);
        },
        initialModal: (state) => {
            Object.assign(state, initialState);
            // const {type, open, title, message, component} = initialState;
            // state.type = type;
            // state.open = open;
            // state.title = title;
            // state.message = message;
            // state.component = component;
        },
    },
})

export const { setModal, initialModal } = modalSlicer.actions;

export const selectModal = (state: RootState) => state.modal;
export default modalSlicer.reducer;