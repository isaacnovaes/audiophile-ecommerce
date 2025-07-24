import { Link } from '@tanstack/react-router';
import { CategoryTypeSchema } from '../types/global';

const DesktopNavBar = () => {
    return (
        <nav className='desktop:block hidden'>
            <ul className='flex items-center gap-x-9'>
                <li>
                    <Link
                        activeProps={{ className: 'text-dark-orange' }}
                        className='text-sub-title hover:text-light-orange/70 tracking-[2px] uppercase transition-colors duration-300'
                        inactiveProps={{ className: 'text-white' }}
                        to='/home'
                    >
                        home
                    </Link>
                </li>
                <li>
                    <Link
                        activeProps={{ className: 'text-dark-orange' }}
                        className='text-sub-title hover:text-light-orange/70 tracking-[2px] uppercase transition-colors duration-300'
                        inactiveProps={{ className: 'text-white' }}
                        params={{ type: CategoryTypeSchema.Values.headphones }}
                        to='/category/$type'
                    >
                        headphones
                    </Link>
                </li>
                <li>
                    <Link
                        activeProps={{ className: 'text-dark-orange' }}
                        className='text-sub-title hover:text-light-orange/70 tracking-[2px] uppercase transition-colors duration-300'
                        inactiveProps={{ className: 'text-white' }}
                        params={{ type: CategoryTypeSchema.Values.speakers }}
                        to='/category/$type'
                    >
                        speakers
                    </Link>
                </li>
                <li>
                    <Link
                        activeProps={{ className: 'text-dark-orange' }}
                        className='text-sub-title hover:text-light-orange/70 tracking-[2px] uppercase transition-colors duration-300'
                        inactiveProps={{ className: 'text-white' }}
                        params={{ type: CategoryTypeSchema.Values.earphones }}
                        to='/category/$type'
                    >
                        earphones
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default DesktopNavBar;
