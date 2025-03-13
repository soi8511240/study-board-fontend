import {
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
} from "@material-tailwind/react";
import {Button} from "@/shared/ui";

type Props = {
    open: boolean,
    handler: () => void,
    title: string,
    message: string,
}

export function Alert({title = '경고', message = '', open, handler}:Props) {

    return (
        <Dialog
            open={open}
            handler={handler}
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
                    onClick={handler}
                    label={'확인'}
                    primary
                />
            </DialogFooter>
        </Dialog>
    )
}