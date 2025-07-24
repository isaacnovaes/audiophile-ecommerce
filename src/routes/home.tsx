import { createFileRoute, Link, linkOptions } from '@tanstack/react-router';
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import AppContainer from '../components/AppContainer';
import Button from '../components/Button';
import HomeBanner from '../components/HomeBanner';

const categories = linkOptions([
    {
        to: '/category/$type',
        params: { type: 'headphones' },
        label: 'Headphones',
        imageSrc: headphonesImage,
        imageAlt: 'Headphones shop',
    },
    {
        to: '/category/$type',
        params: { type: 'speakers' },
        label: 'Speakers',
        imageSrc: speakersImage,
        imageAlt: 'Speakers shop',
    },
    {
        to: '/category/$type',
        params: { type: 'earphones' },
        label: 'Earphones',
        imageSrc: earphonesImage,
        imageAlt: 'Earphones shop',
    },
]);

function HomeCategoryCard(props: {
    readonly to: string;
    readonly params: { type: string };
    readonly label: string;
    readonly imageSrc: string;
    readonly imageAlt: string;
}) {
    return (
        <Link
            className='relative flex w-full flex-col items-center before:absolute before:bottom-0 before:-z-1 before:block before:h-[80%] before:w-full before:rounded-lg before:bg-gray-200'
            params={props.params}
            to={props.to}
        >
            <img
                alt={props.imageAlt}
                className='desktop:h-[180px] mb-2 h-[108px]'
                src={props.imageSrc}
            />
            <h4 className='text-[15px] font-bold tracking-[1.07px] uppercase'>{props.label}</h4>
            <Button label='shop' variant='link' />
        </Link>
    );
}

function RouteComponent() {
    return (
        <div>
            <HomeBanner />
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
                <section className='tablet:flex-row tablet:gap-x-3 tablet:mt-21 desktop:mt-25 mt-8 flex flex-col items-center gap-y-4'>
                    {categories.map((c) => (
                        <HomeCategoryCard key={c.label} {...c} />
                    ))}
                </section>
            </AppContainer>
        </div>
    );
}

export const Route = createFileRoute('/home')({
    component: RouteComponent,
});
