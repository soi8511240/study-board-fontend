import { createPortal } from "react-dom";

import {Alert, CustomModal} from '@/shared/ui/'
import {JSX} from "react";
import {useAppSelector} from "@/app/store/hooks";

export default function ModalPortal({children}) {

    const modalComponents: Record<string, JSX.Element> = {
        Alert: <Alert />,
        Custom: <CustomModal />,
    };

    const {type = 'Alert'} = useAppSelector(state => state.modal);
    // return modalComponents[type];

    const el = document.getElementById('modal-root');
    return createPortal(children, el);
    // return (
    //     <>
    //     모달 포탈
    //         {createPortal(
    //
    //         )}
    //     </>
    // )
}