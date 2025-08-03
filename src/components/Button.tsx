import type { ComponentPropsWithoutRef } from 'react';
import linkIcon from '../assets/icons/icon-arrow-right.svg';

type Variant = 'primary' | 'primary-black' | 'primary-transparent' | 'secondary' | 'link';

interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
    readonly label: string;
    readonly variant?: Variant;
}

const buttonClassNames = {
    primary: 'bg-dark-orange hover:bg-light-orange text-white',
    'primary-black': 'bg-black hover:bg-[#979797] text-white',
    'primary-transparent':
        'bg-transparent border-1 border-black hover:bg-black text-black hover:text-white',
    secondary: 'bg-white border-1 text-black border-black hover:text-white hover:bg-black',
    link: 'text-black/50 flex items-center justify-between gap-x-4 hover:text-dark-orange',
} as const satisfies Record<Variant, string>;

const Button = (props: ButtonProps) => {
    const { type, label, variant = 'primary', ...propsRest } = props;

    return (
        <button
            className={`relative z-10 cursor-pointer px-8 py-4 text-[13px] font-bold tracking-[1px] uppercase ${buttonClassNames[variant]}`}
            // eslint-disable-next-line react/button-has-type
            type={type ?? 'button'}
            {...propsRest}
        >
            {label}
            {variant === 'link' ? <img alt='Link icon' src={linkIcon} /> : null}
        </button>
    );
};
export default Button;
