import { Link, useLocation } from '@tanstack/react-router';
import CartIcon from '../assets/icons/icon-cart.svg';
import HamburgerIcon from '../assets/icons/icon-hamburger.svg';
import LogoIcon from '../assets/icons/logo.svg';
import { useCart } from '../context/CartContext/CartContext.ts';
import AppContainer from './AppContainer.tsx';
import DesktopNavBar from './DesktopNavBar.tsx';

const CartIconComp = () => {
    const cart = useCart();
    const cartQuantity = [...cart.values()].reduce((sum, c) => sum + c.quantity, 0);
    return (
        <div className='relative'>
            <img alt='Cart icon' src={CartIcon} />
            {cartQuantity > 0 ? (
                <span className='bg-dark-orange absolute -top-3 -right-3 grid size-5 place-content-center rounded-full text-[12px] text-white'>
                    {cartQuantity}
                </span>
            ) : null}
        </div>
    );
};

const TopBar = () => {
    const location = useLocation();

    return (
        <div
            className={`relative top-0 right-0 left-0 z-10 ${location.pathname !== '/home' ? 'bg-black' : ''}`}
        >
            <AppContainer>
                <div className='tablet:gap-x-10 flex h-23 items-center justify-between border-b-1 border-b-white/10'>
                    <img alt='Menu icon' className='desktop:hidden' src={HamburgerIcon} />
                    <Link className='tablet:mr-auto desktop:mr-0 cursor-pointer p-2' to='/home'>
                        <img alt='Company logo' src={LogoIcon} />
                    </Link>
                    <DesktopNavBar />
                    <CartIconComp />
                </div>
            </AppContainer>
        </div>
    );
};
export default TopBar;
