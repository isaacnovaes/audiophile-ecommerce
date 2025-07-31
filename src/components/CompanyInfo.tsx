import desktopBestGearImage from '../assets/shared/desktop/best-gear.jpg';
import mobileBestGearImage from '../assets/shared/mobile/best-gear.jpg';
import tabletBestGearImage from '../assets/shared/tablet/best-gear.jpg';
import { BREAKPOINTS } from '../utils/constants';

const CompanyInfo = () => {
    return (
        <section className='tablet:gap-y-[63px] desktop:mb-50 desktop:flex-row-reverse mb-30 flex flex-col justify-between gap-y-10 target:mb-24'>
            <picture>
                <source
                    media={`(min-width: ${BREAKPOINTS.desktop})`}
                    srcSet={desktopBestGearImage}
                />
                <source media={`(min-width: ${BREAKPOINTS.tablet})`} srcSet={tabletBestGearImage} />
                <img alt='Best gear' className='grow-1 rounded-lg' src={mobileBestGearImage} />
            </picture>
            <div className='desktop:basis-[445px] self-center'>
                <h2 className='text-h4 desktop:px-0 desktop:text-left mb-8 px-5 text-center uppercase'>
                    Bring you the <span className='text-2 text-dark-orange'>best</span> audio gear
                </h2>
                <p className='text-body desktop:text-left text-center tracking-normal text-black/50'>
                    Located at the heart of New York City, Audiophile is the premier store for high
                    end headphones, earphones, speakers, and audio accessories. We have a large
                    showroom and luxury demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store to meet some of the
                    fantastic people who make Audiophile the best place to buy your portable audio
                    equipment.
                </p>
            </div>
        </section>
    );
};
export default CompanyInfo;
