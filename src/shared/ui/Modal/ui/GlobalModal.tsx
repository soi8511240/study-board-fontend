'use client';

import {Alert} from './Alert'
import {CustomModal} from './CustomModal'
import {JSX} from "react";
import {useAppSelector} from "@/app/hooks";

export default function GlobalModal() {

    const modalComponents: Record<string, JSX.Element> = {
        Alert: <Alert />,
        Custom: <CustomModal />,
    };

    const {type = 'Alert'} = useAppSelector(state => state.modal);
    console.log('##########', type);
    return modalComponents[type];
}