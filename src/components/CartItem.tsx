import { useAddCartProduct, useRemoveCartProduct } from '../context/CartContext/CartContext';
import type { Cart } from '../types/global';
import CartItemInfo from './CartItemInfo';

const CartItem = (props: { readonly cart: Cart }) => {
    const { cart } = props;
    const addCartProduct = useAddCartProduct();
    const removeCartProduct = useRemoveCartProduct();

    return (
        <li className='flex gap-x-4'>
            <CartItemInfo cart={cart} />
            <div className='ml-auto flex h-8 items-center justify-between gap-x-3 self-center bg-gray-500'>
                <button
                    className='px-3 text-black/25 hover:cursor-pointer'
                    type='button'
                    onClick={() => {
                        removeCartProduct(cart.item);
                    }}
                >
                    -
                </button>
                <span className='text-body min-w-[2ch] text-center font-bold'>{cart.quantity}</span>
                <button
                    className='px-3 text-black/25 hover:cursor-pointer'
                    type='button'
                    onClick={() => {
                        addCartProduct(cart.item);
                    }}
                >
                    +
                </button>
            </div>
        </li>
    );
};

export default CartItem;
