import { Link } from '@tanstack/react-router';
import yx1DesktopImage from '../../assets/home/desktop/earphones-yx1.jpg';
import zx9DesktopImage from '../../assets/home/desktop/speaker-zx9.png';
import yx1MobileImage from '../../assets/home/mobile/earphones-yx1.jpg';
import zx9MobileImage from '../../assets/home/mobile/speaker-zx9.png';
import yx1TabletImage from '../../assets/home/tablet/earphones-yx1.jpg';
import zx9TabletImage from '../../assets/home/tablet/speaker-zx9.png';
import circlesPattern from '../../assets/icons/home/pattern-circles.svg';
import Button from '../../components/Button';
import { BREAKPOINTS } from '../../utils/constants';

const HomeSpecialProductsList = () => {
    return (
        <>
            <section className='bg-dark-orange desktop:flex-row desktop:justify-between desktop:px-[130px] desktop:pb-0 desktop:pt-24 desktop:gap-x-20 mb-6 flex flex-col items-center overflow-hidden rounded-lg py-14'>
                <picture className='tablet:mb-16 desktop:-mb-3 relative z-0 mb-8'>
                    <source
                        height={493}
                        media={`(min-width: ${BREAKPOINTS.desktop})`}
                        srcSet={zx9DesktopImage}
                        width={410}
                    />
                    <source
                        height={237}
                        media={`(min-width: ${BREAKPOINTS.tablet})`}
                        srcSet={zx9TabletImage}
                        width={198}
                    />
                    <source
                        height={207}
                        media={`(max-width: ${BREAKPOINTS.tablet})`}
                        srcSet={zx9MobileImage}
                        width={173}
                    />
                    <img alt='ZX9 speaker' className='relative z-10' />
                    <div className='tablet:w-[944px] desktop:w-[920px] tablet:-top-[140%] tablet:-left-[190%] desktop:-left-[63%] desktop:-top-[10%] absolute -top-[80%] -left-[110%] z-0 w-[558px]'>
                        <img alt='Circles pattern' src={circlesPattern} />
                    </div>
                </picture>
                <div className='desktop:self-start desktop:mt-4 desktop:items-start flex flex-col items-center'>
                    <h1 className='text-h1 desktop:text-left tablet:w-[271px] relative z-10 mb-6 w-[280px] text-center text-white uppercase'>
                        zx9 speaker
                    </h1>
                    <h2 className='text-body desktop:text-left tablet:w-[349px] tablet:mb-10 mb-6 w-[280px] text-center text-white/[75%]'>
                        Upgrade to premium speakers that are phenomenally built to deliver truly
                        remarkable sound.
                    </h2>
                    <Link params={{ slug: 'zx9-speaker' }} to='/product-detail/$slug'>
                        <Button label='see product' variant='primary-black' />
                    </Link>
                </div>
            </section>
            <section className='bg-home-zx7-speaker tablet:pl-[62px] desktop:pl-[95px] mb-6 flex min-h-[320px] flex-col items-start justify-center gap-y-8 rounded-lg pl-6'>
                <h1 className='text-h4 uppercase'>zx7 speaker</h1>
                <Link params={{ slug: 'zx7-speaker' }} to='/product-detail/$slug'>
                    <Button label='see product' variant='primary-transparent' />
                </Link>
            </section>
            <section className='tablet:mb-[96px] desktop:mb-50 tablet:grid-rows-1 tablet:grid-cols-2 desktop:gap-[30px] mb-30 grid grid-cols-1 grid-rows-2 gap-6 target:gap-[11px]'>
                <picture>
                    <source
                        media={`(min-width: ${BREAKPOINTS.desktop})`}
                        srcSet={yx1DesktopImage}
                    />
                    <source media={`(min-width: ${BREAKPOINTS.tablet})`} srcSet={yx1TabletImage} />
                    <img
                        alt='YX1 earphone'
                        className='w-full rounded-lg object-cover'
                        src={yx1MobileImage}
                    />
                </picture>
                <div className='tablet:pl-[41px] desktop:pl-[95px] flex flex-col items-start justify-center gap-y-8 rounded-lg bg-gray-500 pl-6'>
                    <h1 className='text-h4 uppercase'>xy1 speaker</h1>
                    <Link params={{ slug: 'yx1-earphones' }} to='/product-detail/$slug'>
                        <Button label='see product' variant='primary-transparent' />
                    </Link>
                </div>
            </section>
        </>
    );
};
export default HomeSpecialProductsList;
