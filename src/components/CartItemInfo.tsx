import type { Cart } from '../types/global';
import { formatMoney } from '../utils/formatters';

const CartItemInfo = (props: { readonly cartItem: Cart }) => {
    return (
        <>
            <img
                alt={props.cartItem.item.name}
                className='rounded-lg object-cover'
                height={64}
                src={props.cartItem.item.cartImage}
                width={64}
            />
            <div className='flex flex-col justify-around'>
                <span className='text-boy line-clamp-2 font-bold text-black'>
                    {props.cartItem.item.name}
                </span>
                <span className='text-body text-black/50'>
                    {formatMoney(props.cartItem.item.price)}
                </span>
            </div>
        </>
    );
};
export default CartItemInfo;
