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

// Custom
export function CustomModal() {
    const {open, title, closeModal, component} = useModal();

    // handler={handler}
    return (
        <>
            <div className={open?'open':''}>
                <div className="modal-title">
                    {title}
                </div>
                <div className="modal-container">
                    {component}
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