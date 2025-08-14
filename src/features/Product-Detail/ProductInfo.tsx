import type { Product } from '../../types/global';
import { BREAKPOINTS } from '../../utils/constants';
import { formatMoney } from '../../utils/formatters';
import { ProductActions } from './CartActions';

const ProductInfo = ({ product }: { readonly product: Product }) => {
    return (
        <div className='tablet:flex-row tablet:min-h-120 tablet:gap-y-0 tablet:gap-x-[69px] desktop:gap-x-[124px] tablet:mt-6 tablet:mb-30 mt-16 mb-22 flex flex-col items-center gap-y-8'>
            <picture>
                <source
                    height={560}
                    media={`(min-width: ${BREAKPOINTS.desktop})`}
                    srcSet={product.image.desktop}
                    width={540}
                />
                <source
                    height={480}
                    media={`(min-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.image.tablet}
                    width={281}
                />
                <source
                    height={352}
                    media={`(max-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.image.mobile}
                />
                <img alt={product.name} className='tablet:max-w-none max-w-100 rounded-lg' />
            </picture>
            <div className='tablet:w-[340px] desktop:items-start flex flex-col items-start'>
                {product.new ? (
                    <span className='text-overline text-dark-orange mb-6 text-left uppercase'>
                        new product
                    </span>
                ) : null}
                <h3 className='text-h4 desktop:text-h2 mb-6 text-left text-black uppercase'>
                    {product.name}
                </h3>
                <p className='text-body desktop:text-left mb-6 text-left text-black/50'>
                    {product.description}
                </p>
                <p className='mb-[31px] font-bold'>{formatMoney(product.price)}</p>
                <div className='flex w-full items-center gap-x-4'>
                    <ProductActions product={product} />
                </div>
            </div>
        </div>
    );
};
export default ProductInfo;
