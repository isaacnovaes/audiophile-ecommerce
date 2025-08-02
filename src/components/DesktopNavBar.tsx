import NavLinks from './NavLinks';

const DesktopNavBar = () => {
    return (
        <nav className='desktop:block hidden'>
            <ul className='flex items-center gap-x-9'>
                <NavLinks />
            </ul>
        </nav>
    );
};
export default DesktopNavBar;
