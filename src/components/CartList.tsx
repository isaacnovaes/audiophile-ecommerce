import { useAddCartProduct, useRemoveCartProduct } from '../context/CartContext/CartContext';
import type { Cart } from '../types/global';
import { formatMoney } from '../utils/formatters';

const CartItem = (props: { readonly cart: Cart }) => {
    const addCartProduct = useAddCartProduct();
    const removeCartProduct = useRemoveCartProduct();

    return (
        <li className='flex gap-x-4'>
            <img
                alt={props.cart.item.name}
                className='rounded-lg object-cover'
                height={64}
                src={props.cart.item.cartImage}
                width={64}
            />
            <div className='flex flex-col justify-around'>
                <span className='text-boy line-clamp-2 font-bold text-black'>
                    {props.cart.item.name}
                </span>
                <span className='text-body text-black/50'>
                    {formatMoney(props.cart.item.price)}
                </span>
            </div>
            <div className='ml-auto flex h-8 items-center justify-between gap-x-3 self-center bg-gray-500'>
                <button
                    className='px-3 text-black/25 hover:cursor-pointer'
                    type='button'
                    onClick={() => {
                        removeCartProduct(props.cart.item);
                    }}
                >
                    -
                </button>
                <span className='text-body min-w-[2ch] text-center font-bold'>
                    {props.cart.quantity}
                </span>
                <button
                    className='px-3 text-black/25 hover:cursor-pointer'
                    type='button'
                    onClick={() => {
                        addCartProduct(props.cart.item);
                    }}
                >
                    +
                </button>
            </div>
        </li>
    );
};

const CartList = (props: { readonly cart: Cart[] }) => {
    return (
        <ul className='tablet:max-h-60 mb-[31px] flex max-h-50 flex-col gap-y-6 overflow-y-auto'>
            {props.cart.map((c) => (
                <CartItem key={c.item.id} cart={c} />
            ))}
        </ul>
    );
};
export default CartList;
