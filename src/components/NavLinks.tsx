import { Link, linkOptions } from '@tanstack/react-router';
import { CategoryTypeSchema } from '../types/global';

const navLinks = linkOptions([
    {
        to: '/home',
        label: 'home',
        params: {},
    },
    {
        to: '/category/$type',
        params: { type: CategoryTypeSchema.Values.headphones },
        label: 'headphones',
    },
    {
        to: '/category/$type',
        params: { type: CategoryTypeSchema.Values.speakers },
        label: 'speakers',
    },
    {
        to: '/category/$type',
        params: { type: CategoryTypeSchema.Values.earphones },
        label: 'earphones',
    },
]);

const NavLinks = () => {
    return navLinks.map((l) => (
        <li key={l.label}>
            <Link
                activeProps={{ className: 'text-dark-orange' }}
                className='text-sub-title hover:text-light-orange/70 tracking-[2px] uppercase transition-colors duration-300 not-first:p-3'
                inactiveProps={{ className: 'text-white' }}
                params={l.params}
                to={l.to}
            >
                {l.label}
            </Link>
        </li>
    ));
};
export default NavLinks;
