import desktopImage from '../assets/home/desktop/hero.jpg';
import mobileImage from '../assets/home/mobile/hero.jpg';
import tabletImage from '../assets/home/tablet/hero.jpg';
import { BREAKPOINTS } from '../utils/constants';

const HomeHero = () => {
    return (
        <picture>
            <source media={`(min-width: ${BREAKPOINTS.desktop})`} srcSet={desktopImage} />
            <source media={`(min-width: ${BREAKPOINTS.tablet})`} srcSet={tabletImage} />
            <img
                alt='Headphone for home page'
                className='absolute inset-0 h-dvh w-dvw object-cover'
                src={mobileImage}
            />
        </picture>
    );
};
export default HomeHero;
