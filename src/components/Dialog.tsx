import type { ReactNode } from 'react';

const Dialog = (props: {
    readonly dialogRef: React.RefObject<HTMLDialogElement | null>;
    readonly children: ReactNode;
}) => {
    return (
        <dialog
            ref={props.dialogRef}
            className='h-dvh max-h-dvh w-dvw max-w-none bg-transparent backdrop:bg-[#969696]/40'
        >
            {props.children}
        </dialog>
    );
};
export default Dialog;
