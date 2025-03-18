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

// Custom
export function CustomModal() {
    const {open, title, closeModal, component} = useModal();

    // handler={handler}
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
                    {component}
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