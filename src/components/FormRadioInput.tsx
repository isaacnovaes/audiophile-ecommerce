import { useId } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends UseFormRegisterReturn {
    readonly label: string;
    readonly value: string;
}

const FormRadioInput = (props: Props) => {
    const { label, value, ...registerProps } = props;
    const id = useId();
    return (
        <label
            className='radio-input has-checked:border-dark-orange hover:border-dark-orange flex items-center gap-x-4 rounded-lg border-1 border-gray-100 px-6 py-4.5 text-[12px] font-bold tracking-[-0.21px] transition-colors not-last:mb-4 hover:cursor-pointer'
            htmlFor={id}
        >
            <input
                className='checked:ring-dark-orange size-5 appearance-none rounded-full border-1 border-gray-100 ring-5 ring-transparent ring-offset-4 transition-shadow ring-inset hover:cursor-pointer'
                id={id}
                type='radio'
                value={value}
                {...registerProps}
            />
            <span>{label}</span>
        </label>
    );
};
export default FormRadioInput;
