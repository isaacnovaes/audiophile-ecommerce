import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import HamburgerIcon from '../assets/icons/icon-hamburger.svg';
import LogoIcon from '../assets/icons/logo.svg';
import { BREAKPOINTS } from '../utils/constants.ts';
import AppContainer from './AppContainer.tsx';
import CartIconComp from './CartIconComp.tsx';
import DesktopNavBar from './DesktopNavBar.tsx';
import Dialog from './Dialog.tsx';
import GeneralProductCategoriesList from './GeneralProductCategoriesList.tsx';

const TopBar = () => {
    const location = useLocation();
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            const [entry] = entries;
            if (
                dialogRef.current?.open &&
                entry.contentRect.width >= Number(BREAKPOINTS.desktop.slice(0, -2))
            ) {
                dialogRef.current.close();
            }
        });

        if (dialogRef.current) {
            observer.observe(dialogRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className={`relative top-0 right-0 left-0 z-10 ${location.pathname !== '/home' ? 'bg-black' : ''}`}
        >
            <AppContainer>
                <div className='tablet:gap-x-10 flex h-23 items-center justify-between border-b-1 border-b-white/10'>
                    <button
                        className='desktop:hidden -translate-x-3 p-3 hover:cursor-pointer'
                        type='button'
                        onClick={() => {
                            dialogRef.current?.showModal();
                        }}
                    >
                        <img alt='Menu icon' src={HamburgerIcon} />
                    </button>
                    <Dialog dialogRef={dialogRef}>
                        <div className='mt-[92px] max-h-[calc(100dvh-92px)] overflow-y-auto bg-white pt-[1px]'>
                            <AppContainer>
                                <GeneralProductCategoriesList
                                    onClick={() => {
                                        dialogRef.current?.close();
                                    }}
                                />
                            </AppContainer>
                        </div>
                    </Dialog>
                    <Link
                        className='tablet:mr-auto desktop:mr-0 -translate-x-3 cursor-pointer p-3'
                        to='/home'
                    >
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
