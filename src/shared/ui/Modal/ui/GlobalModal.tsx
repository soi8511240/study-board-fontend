'use client';

import {Alert} from './Alert'
import {CustomModal} from './CustomModal'
import {JSX} from "react";
import {useAppSelector} from "@/app/store/hooks";

export default function GlobalModal() {

    const modalComponents: Record<string, JSX.Element> = {
        Alert: <Alert />,
        Custom: <CustomModal />,
    };

    const {type = 'Alert'} = useAppSelector(state => state.modal);
    return modalComponents[type];
}

// 'use client';
//
// import {Alert} from './Alert'
// import {CustomModal} from './CustomModal'
// import {JSX} from "react";
// import {useAppSelector} from "@/app/store/hooks";
//
// export default function GlobalModal() {
//
//     const modalComponents: Record<string, JSX.Element> = {
//         Alert: <Alert />,
//         Custom: <CustomModal />,
//     };
//
//     const {type = 'Alert'} = useAppSelector(state => state.modal);
//     return modalComponents[type];
// }

