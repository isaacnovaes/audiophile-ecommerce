import type { Cart } from '../types/global';
import CartItem from './CartItem';

const CartList = (props: { readonly cart: Cart[] }) => {
    return (
        <ul className='tablet:max-h-60 mb-[31px] flex max-h-50 flex-col gap-y-6 overflow-y-auto'>
            {props.cart.map((c) => (
                <CartItem key={c.item.id} cartItem={c} />
            ))}
        </ul>
    );
};
export default CartList;
