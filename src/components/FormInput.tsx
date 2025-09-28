import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends UseFormRegisterReturn {
    readonly label: string;
    readonly errorMessage?: string;
    readonly placeHolder: string;
}

const FormInput = (props: Props) => {
    const { errorMessage, label, placeHolder, ...registerProps } = props;
    return (
        <div className='mb-6 flex flex-col gap-y-[9px]'>
            <div className='flex items-center justify-between'>
                <label
                    className={`text-[12px] font-bold tracking-[-0.21px] ${errorMessage ? 'text-red-400' : ''}`}
                    htmlFor={registerProps.name}
                >
                    {label}
                </label>
                <span className='text-[12px] font-medium tracking-[-0.21px] text-red-400'>
                    {errorMessage}
                </span>
            </div>
            <input
                id={registerProps.name}
                {...registerProps}
                className={`rounded-lg border-1 px-6 py-4.5 text-[14px] font-bold tracking-[-0.25px] text-black/40 placeholder:text-black/40 ${errorMessage ? 'border-red-400' : 'border-gray-100'} `}
                placeholder={placeHolder}
            />
        </div>
    );
};
export default FormInput;
