import Button from '../../components/Button';
import {
    useAddCartProduct,
    useCart,
    useRemoveCartProduct,
} from '../../context/CartContext/CartContext';
import type { Product } from '../../types/global';

export const ProductActions = ({ product }: { readonly product: Product }) => {
    const addCartProduct = useAddCartProduct();
    const removeCartProduct = useRemoveCartProduct();
    const cart = useCart();
    const cartProduct = cart.get(product.name);

    return (
        <>
            <div className='flex items-center justify-between bg-gray-500 text-[13px] text-black/25'>
                <button
                    className='hover:text-dark-orange px-8 py-4 hover:cursor-pointer'
                    type='button'
                    onClick={() => {
                        addCartProduct(product);
                    }}
                >
                    +
                </button>
                <span className='min-w-2 font-bold text-black tabular-nums'>
                    {cartProduct?.quantity ?? 0}
                </span>
                <button
                    className='hover:text-dark-orange px-8 py-4 hover:cursor-pointer disabled:cursor-not-allowed'
                    disabled={!cartProduct || cartProduct.quantity === 0}
                    type='button'
                    onClick={() => {
                        removeCartProduct(product);
                    }}
                >
                    -
                </button>
            </div>
            <Button
                label='add to cart'
                onClick={() => {
                    addCartProduct(product);
                }}
            />
        </>
    );
};
