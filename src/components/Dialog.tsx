import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface DialogProps extends ComponentPropsWithoutRef<'dialog'> {
    readonly dialogRef: React.RefObject<HTMLDialogElement | null>;
    readonly children: ReactNode;
}

const Dialog = (props: DialogProps) => {
    const { dialogRef, children, ...rest } = props;
    return (
        <dialog
            {...rest}
            ref={dialogRef}
            className='h-dvh max-h-dvh w-dvw max-w-none bg-transparent backdrop:bg-[#969696]/40'
        >
            {children}
        </dialog>
    );
};
export default Dialog;
