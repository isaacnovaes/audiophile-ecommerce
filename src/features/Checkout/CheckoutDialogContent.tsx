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

    const remainingItemsQuantity = cart.length - 1;

    return (
        <AppContainer>
            <div className='h-80dvh mt-23 flex items-center'>
                <div className='mx-auto rounded-lg bg-white p-8'>
                    <img
                        alt='Order confirmation'
                        className='mb-6'
                        height='64'
                        src={OrderConfirmationIcon}
                        width='64'
                    />
                    <h1 className='tablet:text-[32px] tablet:w-[284px] tablet:leading-9 tablet:tracking-[1.14px] text-[24px] leading-7 font-bold tracking-[0.86px] uppercase'>
                        Thank you for your order
                    </h1>
                    <h2 className='text-body mt-4 mb-6 text-black/50'>
                        You will receive an email confirmation shortly.
                    </h2>
                    <div className='tablet:flex tablet:justify-between overflow-hidden rounded-lg'>
                        <div className='overflow-x-auto bg-gray-500 p-6 pl-4'>
                            <div className='flex justify-between gap-x-3'>
                                <CartItemInfo cartItem={firstCartItem} />
                                <span className='text-body ml-3 self-center text-right text-black/50'>
                                    x{firstCartItem.quantity}
                                </span>
                            </div>
                            {cart.length > 2 ? (
                                <div className='bg-gray-500'>
                                    <hr className='my-3 text-gray-700/15' />
                                    <p className='text-center text-[12px] font-bold tracking-[-0.21px] text-black/50'>
                                        and {remainingItemsQuantity} other{' '}
                                        {remainingItemsQuantity > 1 ? 'items' : 'item'}
                                    </p>
                                </div>
                            ) : null}
                        </div>

                        <div className='tablet:basis-3/6 tablet:flex tablet:flex-col tablet:justify-center bg-black p-6'>
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
