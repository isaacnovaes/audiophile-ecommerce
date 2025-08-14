import { Link } from '@tanstack/react-router';
import Button from '../../components/Button';
import type { Product } from '../../types/global';
import { BREAKPOINTS } from '../../utils/constants';

const YouAlsoMayLike = ({ product }: { readonly product: Product }) => {
    return (
        <div className='mb-30'>
            <h5 className='text-h5 mb-10 text-center tracking-[0.86px] uppercase'>
                You also may like
            </h5>
            <div className='tablet:flex-row tablet:gap-y-0 tablet:gap-x-5 desktop:gap-x-[30px] flex flex-col justify-between gap-y-14'>
                {product.others.map((other) => (
                    <Link
                        key={other.slug}
                        className='tablet:gap-y-10 tablet:gap-x-8 group flex flex-col items-center justify-between gap-y-8'
                        params={{ slug: other.slug }}
                        to='/product-detail/$slug'
                    >
                        <picture>
                            <source
                                media={`(min-width: ${BREAKPOINTS.desktop})`}
                                srcSet={other.image.desktop}
                            />
                            <source
                                media={`(min-width: ${BREAKPOINTS.tablet})`}
                                srcSet={other.image.tablet}
                            />
                            <source
                                media={`(max-width: ${BREAKPOINTS.tablet})`}
                                srcSet={other.image.mobile}
                            />
                            <img alt={other.name} className='rounded-lg' src={other.image.mobile} />
                        </picture>
                        <h6 className='text-h5 leading-none uppercase'>{other.name}</h6>
                        <Button label='see product' />
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default YouAlsoMayLike;
