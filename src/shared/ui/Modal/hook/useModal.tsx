import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {type ModalState, setModal, initialModal} from "@/shared/ui/";

export function useModal() {

    const { type, open, title, message, component }:ModalState
        = useAppSelector((state) => state.modal);
    const dispatch = useAppDispatch();

    const callModal = (params:ModalState)=>{
        const newState = {
            ...params,
            open: true,
        }
        console.log('################## newState', params);
        dispatch(setModal(newState));
    }

    const closeModal = ()=>{
        console.log('closeModal');
        dispatch(initialModal());
    }

    // useEffect(()=>{
    //     console.log('################## useEffect', open);
    // },[open]);

    return {type, open, title, message, component, callModal, closeModal};
}
