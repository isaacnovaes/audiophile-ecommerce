import type { Product } from '../../types/global';
import { BREAKPOINTS } from '../../utils/constants';

const ProductGallery = ({ product }: { readonly product: Product }) => {
    return (
        <div className='tablet:grid-cols-2 tablet:grid-rows-2 tablet:gap-x-4.5 desktop:grid-cols-[445px_1fr] desktop:mb-40 mb-30 grid gap-y-5'>
            <picture>
                <source
                    media={`(min-width: ${BREAKPOINTS.desktop})`}
                    srcSet={product.gallery.first.desktop}
                />
                <source
                    media={`(min-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.gallery.first.tablet}
                />
                <source
                    height={174}
                    media={`(max-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.gallery.first.mobile}
                />
                <img alt={product.name} className='tablet:h-full tablet:object-cover rounded-lg' />
            </picture>
            <picture className='tablet:row-start-2 tablet:row-end-3'>
                <source
                    media={`(min-width: ${BREAKPOINTS.desktop})`}
                    srcSet={product.gallery.second.desktop}
                />
                <source
                    media={`(min-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.gallery.second.tablet}
                />
                <source
                    height={174}
                    media={`(max-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.gallery.second.mobile}
                />
                <img alt={product.name} className='tablet:h-full tablet:object-cover rounded-lg' />
            </picture>
            <picture className='tablet:row-span-full'>
                <source
                    media={`(min-width: ${BREAKPOINTS.desktop})`}
                    srcSet={product.gallery.third.desktop}
                />
                <source
                    media={`(min-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.gallery.third.tablet}
                />
                <source
                    height={368}
                    media={`(max-width: ${BREAKPOINTS.tablet})`}
                    srcSet={product.gallery.third.mobile}
                />
                <img alt={product.name} className='tablet:h-full tablet:object-cover rounded-lg' />
            </picture>
        </div>
    );
};
export default ProductGallery;
