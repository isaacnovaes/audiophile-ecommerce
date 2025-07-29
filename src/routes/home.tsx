import { createFileRoute, Link, linkOptions } from '@tanstack/react-router';
import zx9DesktopImage from '../assets/home/desktop/speaker-zx9.png';
import zx9MobileImage from '../assets/home/mobile/speaker-zx9.png';
import zx9TabletImage from '../assets/home/tablet/speaker-zx9.png';
import circlesPattern from '../assets/icons/home/pattern-circles.svg';
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import AppContainer from '../components/AppContainer';
import Button from '../components/Button';
import HomeHero from '../components/HomeHero';
import { CategoryTypeSchema } from '../types/global';
import { BREAKPOINTS } from '../utils/constants';

const PRODUCT_CATEGORIES = linkOptions([
    {
        to: '/category/$type',
        params: { type: CategoryTypeSchema.Values.headphones },
        label: 'Headphones',
        imageSrc: headphonesImage,
        imageAlt: 'Headphones shop',
        pid: 1,
    },
    {
        to: '/category/$type',
        params: { type: CategoryTypeSchema.Values.speakers },
        label: 'Speakers',
        imageSrc: speakersImage,
        imageAlt: 'Speakers shop',
        pid: 2,
    },
    {
        to: '/category/$type',
        params: { type: CategoryTypeSchema.Values.earphones },
        label: 'Earphones',
        imageSrc: earphonesImage,
        imageAlt: 'Earphones shop',
        pid: 3,
    },
]);

function RouteComponent() {
    return (
        <div>
            <HomeHero />
            <AppContainer>
                <section className='desktop:items-start desktop:w-[380px] relative flex h-[calc(100vh-92px)] flex-col items-center justify-normal'>
                    <h2 className='text-overline tablet:mt-31 desktop:mt-60 tablet:mb-6 mt-27 mb-4 text-center text-white/[49.64%] uppercase'>
                        new product
                    </h2>
                    <h1 className='tablet:text-h1 desktop:text-left mb-6 text-center text-[36px]/[40px] font-bold tracking-[1.29px] text-white uppercase'>
                        XX99 Mark II Headphones
                    </h1>
                    <h3 className='text-body tablet:mb-10 desktop:text-left mb-7 text-center text-balance text-white/[75%]'>
                        Experience natural, lifelike audio and exceptional build quality made for
                        the passionate music enthusiast.
                    </h3>
                    <Button label='see product' />
                </section>
                <section className='tablet:flex-row tablet:gap-x-3 tablet:mt-21 desktop:mt-25 tablet:mb-24 desktop:mb-42 mt-8 mb-30 flex flex-col items-center gap-y-4'>
                    {PRODUCT_CATEGORIES.map((c) => (
                        <Link
                            key={c.pid}
                            className='relative flex w-full flex-col items-center before:absolute before:bottom-0 before:-z-1 before:block before:h-[80%] before:w-full before:rounded-lg before:bg-gray-200'
                            params={c.params}
                            to={c.to}
                        >
                            <img
                                alt={c.imageAlt}
                                className='desktop:h-[180px] mb-2 h-[108px]'
                                src={c.imageSrc}
                            />
                            <h4 className='text-[15px] font-bold tracking-[1.07px] uppercase'>
                                {c.label}
                            </h4>
                            <Button label='shop' variant='link' />
                        </Link>
                    ))}
                </section>
                <section className='bg-dark-orange desktop:flex-row desktop:justify-between desktop:px-[130px] desktop:pb-0 desktop:pt-24 desktop:gap-x-20 flex flex-col items-center overflow-hidden rounded-lg py-14'>
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
                        <Button label='see product' variant='primary-black' />
                    </div>
                </section>
            </AppContainer>
        </div>
    );
}

export const Route = createFileRoute('/home')({
    component: RouteComponent,
});
