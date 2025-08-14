import type { Product } from '../../types/global';

const ProductFeatures = ({ product }: { readonly product: Product }) => {
    return (
        <div className='tablet:mb-[153px] desktop:gap-y-0 desktop:mb-40 desktop:flex-row desktop:gap-x-[125px] mb-22 flex flex-col gap-y-22'>
            <div>
                <h5 className='text-h5 tablet:mb-8 mb-6 uppercase'>features</h5>
                <p className='text-body desktop:max-w-[635px] text-left whitespace-pre-wrap text-black/50'>
                    {product.features}
                </p>
            </div>
            <div className='tablet:flex-row tablet:gap-y-0 tablet:gap-x-[165px] desktop:flex-col desktop:gap-y-8 flex flex-col gap-y-6'>
                <h5 className='text-h5 uppercase'>in the box</h5>
                <ul>
                    {product.includes.map((i) => (
                        <li key={i.item} className='text-body text-black/50'>
                            <span className='text-dark-orange desktop:mr-[21px] mr-6'>
                                {i.quantity}x
                            </span>
                            {i.item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default ProductFeatures;
