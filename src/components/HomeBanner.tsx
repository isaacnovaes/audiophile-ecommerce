import desktopImage from '../assets/home/desktop/image-hero.jpg';
import mobileImage from '../assets/home/mobile/image-header.jpg';
import tabletImage from '../assets/home/tablet/image-header.jpg';
import { BREAKPOINTS } from '../utils/constants';

const HomeBanner = () => {
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
export default HomeBanner;
