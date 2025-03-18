import {
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
} from "@material-tailwind/react";
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
            <Dialog
                open={open}
                handler={() => {closeModal()}}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                size={'xs'}
            >
                <DialogHeader>{title}</DialogHeader>
                <DialogBody>
                    {message}
                </DialogBody>
                <DialogFooter>
                    <Button
                        onClick={() => {closeModal()}}
                        label={'확인'}
                        primary
                    />
                </DialogFooter>
            </Dialog>
        </>
    )
}