import { Link, linkOptions } from '@tanstack/react-router';
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import { CategoryTypeSchema } from '../types/global';
import Button from './Button';

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

function GeneralProductCategoriesList() {
    return (
        <section className='tablet:flex-row tablet:gap-x-3 tablet:mt-21 desktop:mt-25 tablet:mb-24 desktop:mb-42 mt-8 mb-30 flex flex-col items-center gap-y-4'>
            {PRODUCT_CATEGORIES.map((c) => (
                <Link
                    key={c.pid}
                    className='relative flex w-full flex-col items-center before:absolute before:bottom-0 before:-z-1 before:block before:h-[80%] before:w-full before:rounded-lg before:bg-gray-500'
                    params={c.params}
                    to={c.to}
                >
                    <img
                        alt={c.imageAlt}
                        className='desktop:h-[180px] mb-2 h-[108px]'
                        src={c.imageSrc}
                    />
                    <h4 className='text-[15px] font-bold tracking-[1.07px] uppercase'>{c.label}</h4>
                    <Button label='shop' variant='link' />
                </Link>
            ))}
        </section>
    );
}
export default GeneralProductCategoriesList;
