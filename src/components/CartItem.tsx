import { useAddCartProduct, useRemoveCartProduct } from '../context/CartContext/CartContext';
import type { Cart } from '../types/global';
import CartItemInfo from './CartItemInfo';

const CartItem = (props: { readonly cartItem: Cart }) => {
    const { cartItem } = props;
    const addCartProduct = useAddCartProduct();
    const removeCartProduct = useRemoveCartProduct();

    return (
        <li className='flex gap-x-4'>
            <CartItemInfo cartItem={cartItem} />
            <div className='ml-auto flex h-8 items-center justify-between gap-x-3 self-center bg-gray-500'>
                <button
                    className='px-3 text-black/25 hover:cursor-pointer'
                    type='button'
                    onClick={() => {
                        removeCartProduct(cartItem.item);
                    }}
                >
                    -
                </button>
                <span className='text-body min-w-[2ch] text-center font-bold'>
                    {cartItem.quantity}
                </span>
                <button
                    className='px-3 text-black/25 hover:cursor-pointer'
                    type='button'
                    onClick={() => {
                        addCartProduct(cartItem.item);
                    }}
                >
                    +
                </button>
            </div>
        </li>
    );
};

export default CartItem;
