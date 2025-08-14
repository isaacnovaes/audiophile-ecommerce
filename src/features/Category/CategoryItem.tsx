import { Link } from '@tanstack/react-router';
import Button from '../../components/Button';
import type { Product } from '../../types/global';
import { BREAKPOINTS } from '../../utils/constants';

const CategoryItem = ({ product }: { readonly product: Product }) => {
    return (
        <div
            key={product.id}
            className='tablet:gap-y-[52px] desktop:gap-y-0 desktop:gap-x-[125px] desktop:flex-row tablet:first:mt-30 desktop:first:mt-40 desktop:even:flex-row-reverse desktop:mb-40 mb-30 flex flex-col items-center gap-y-8 first:mt-16'
        >
            <picture>
                <source
                    height={560}
                    media={`(min-width: ${BREAKPOINTS.desktop})`}
                    srcSet={product.categoryImage.desktop}
                    width={540}
                />
                <source
                    height={352}
                    media={`(min-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.categoryImage.tablet}
                    width={689}
                />
                <source
                    height={352}
                    media={`(max-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.categoryImage.mobile}
                    width={327}
                />
                <img alt={product.name} className='rounded-lg' />
            </picture>
            <div className='tablet:w-[572px] desktop:w-[445px] desktop:items-start flex w-[327px] flex-col items-center'>
                {product.new ? (
                    <span className='text-overline text-dark-orange mb-6 uppercase'>
                        new product
                    </span>
                ) : null}
                <h3 className='text-h4 mb-6 text-center text-black'>{product.name}</h3>
                <p className='text-body desktop:text-left mb-6 text-center text-black/50'>
                    {product.description}
                </p>
                <Link params={{ slug: product.slug }} to='/product-detail/$slug'>
                    <Button label='see product' />
                </Link>
            </div>
        </div>
    );
};
export default CategoryItem;
