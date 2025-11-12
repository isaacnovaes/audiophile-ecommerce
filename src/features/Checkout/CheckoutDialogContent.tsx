import OrderConfirmationIcon from '../../assets/icons/checkout/icon-order-confirmation.svg';
import AppContainer from '../../components/AppContainer';
import Button from '../../components/Button';
import CartItemInfo from '../../components/CartItemInfo';
import { useCart } from '../../context/CartContext/CartContext';
import { getCartTotals } from '../../utils/checkout';
import { formatMoney } from '../../utils/formatters';

const CheckoutDialogContent = (props: {
    readonly dialogRef: React.RefObject<HTMLDialogElement | null>;
}) => {
    const cart = useCart();
    const [firstCartItem] = cart;
    const { grandTotal } = getCartTotals(cart);

    if (cart.length === 0) {
        return null;
    }

    return (
        <AppContainer>
            <div className='h-80dvh mt-23 flex items-center'>
                <div className='tablet:mx-auto rounded-lg bg-white p-8'>
                    <img
                        alt='Order confirmation'
                        className='mb-6'
                        height='64'
                        src={OrderConfirmationIcon}
                        width='64'
                    />
                    <h1 className='text-[24px] leading-7 font-bold tracking-[0.86px]'>
                        Thank you for your order
                    </h1>
                    <h2 className='text-body mt-4 mb-6 text-black/50'>
                        You will receive an email confirmation shortly.
                    </h2>
                    <div className='overflow-hidden rounded-lg'>
                        <div
                            key={firstCartItem.item.id}
                            className='flex justify-between gap-x-3 bg-gray-500 p-6 pl-4'
                        >
                            <CartItemInfo cartItem={firstCartItem} />
                            <span className='text-body ml-3 self-center text-right text-black/50'>
                                x{firstCartItem.quantity}
                            </span>
                        </div>

                        <div className='bg-black p-6'>
                            <h4 className='text-body text-white/50 uppercase'>grand total</h4>
                            <h5 className='text-h6 text-white'>{formatMoney(grandTotal)}</h5>
                        </div>
                    </div>

                    <div className='tablet:mt-12 mt-6 flex *:basis-full'>
                        <Button
                            label='back to home'
                            type='button'
                            onClick={() => {
                                props.dialogRef.current?.close();
                            }}
                        />
                    </div>
                </div>
            </div>
        </AppContainer>
    );
};
export default CheckoutDialogContent;
