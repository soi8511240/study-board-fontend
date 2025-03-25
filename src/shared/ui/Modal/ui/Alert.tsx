// import {
//     Dialog,
//     DialogBody,
//     DialogFooter,
//     DialogHeader,
// } from "@material-tailwind/react";
import {Button, useModal} from "@/shared/ui";

// type Props = {
//     open: boolean;
//     handler: () => void;
//     title: string;
//     message: string;
// }

// 공통 useAlert으로 사용하도록 redux 상태 처리
export function Alert() {
    const {open, title, message, closeModal} = useModal();

    return (
        <>
            <div className={open?'open':''}>
                <div className="modal-title">
                    {title}
                </div>
                <div className="modal-container">
                    {message}
                </div>
                <div className="modal-footer">
                    <Button
                        onclick={() => {closeModal()}}
                        label={'확인'}
                        primary
                    />
                </div>
            </div>
        </>
    )
}