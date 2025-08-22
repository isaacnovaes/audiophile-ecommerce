import type { Cart } from '../types/global';
import { formatMoney } from '../utils/formatters';

const CartItemInfo = (props: { readonly cart: Cart }) => {
    return (
        <>
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
        </>
    );
};
export default CartItemInfo;
