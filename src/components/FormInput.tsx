import { useId } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends UseFormRegisterReturn {
    readonly label: string;
    readonly errorMessage?: string;
    readonly placeHolder: string;
}

const FormInput = (props: Props) => {
    const { errorMessage, label, placeHolder, ...registerProps } = props;
    const id = useId();
    return (
        <div className='flex flex-col gap-y-[9px] not-last:mb-6'>
            <div className='flex items-center justify-between'>
                <label
                    className={`text-[12px] font-bold tracking-[-0.21px] ${errorMessage ? 'text-red-400' : ''}`}
                    htmlFor={id}
                >
                    {label}
                </label>
                <span className='text-[12px] font-medium tracking-[-0.21px] text-red-400'>
                    {errorMessage}
                </span>
            </div>
            <input
                id={id}
                {...registerProps}
                aria-invalid={Boolean(errorMessage)}
                className='caret-dark-orange hover:not-focus-visible:border-dark-orange rounded-lg border-1 border-gray-100 px-6 py-4.5 text-[14px] font-bold tracking-[-0.25px] text-black outline-transparent transition-colors placeholder:text-black/40 hover:cursor-pointer focus-visible:outline-black aria-invalid:not-focus-visible:border-red-400'
                placeholder={placeHolder}
            />
        </div>
    );
};
export default FormInput;
