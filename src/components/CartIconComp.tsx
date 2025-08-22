import { Link } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import CartIcon from '../assets/icons/icon-cart.svg';
import { useCart, useRemoveAllCartProducts } from '../context/CartContext/CartContext';
import { formatMoney } from '../utils/formatters';
import CartList from './CartList';
import Dialog from './Dialog';

const CartIconComp = () => {
    const cart = [...useCart().values()];
    const cartQuantity = cart.reduce((sum, c) => sum + c.quantity, 0);
    const cartTotal = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);

    const removeAllCartProducts = useRemoveAllCartProducts();

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openModal = () => {
        if (dialogRef.current && cartQuantity) {
            dialogRef.current.showModal();
        }
    };
    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    useEffect(() => {
        if (cartQuantity === 0) {
            closeModal();
        }
    }, [cartQuantity]);

    return (
        <div className='relative'>
            <button
                className='p-3 hover:cursor-pointer'
                type='button'
                onClick={() => {
                    openModal();
                }}
            >
                <img alt='Cart icon' src={CartIcon} />
            </button>
            <Dialog dialogRef={dialogRef}>
                <div className='desktop:mx-auto desktop:w-[90%] desktop:max-w-[1111px]'>
                    <div className='tablet:mr-10 tablet:w-[377px] desktop:mr-0 mx-auto mt-[116px] w-100 max-w-[95%] rounded-lg bg-white px-7 py-8'>
                        <div className='mb-2 flex items-center justify-between'>
                            <h6 className='text-h6 uppercase'>cart ({cartQuantity})</h6>
                            <button
                                className='text-body p-2 text-gray-700 underline hover:cursor-pointer'
                                type='button'
                                onClick={() => {
                                    removeAllCartProducts();
                                }}
                            >
                                Remove all
                            </button>
                            <button
                                className='p-2 hover:cursor-pointer hover:text-black/25'
                                type='button'
                                onClick={() => {
                                    closeModal();
                                }}
                            >
                                &#x2715;
                            </button>
                        </div>

                        <CartList cart={cart} />

                        <div className='mb-6 flex justify-between'>
                            <span className='text-body text-black/50 uppercase'>total</span>
                            <span className='text-body text-[18px] font-bold'>
                                {formatMoney(cartTotal)}
                            </span>
                        </div>
                        <Link
                            className='bg-dark-orange text-body block w-full py-4 text-center font-bold tracking-[1px] text-white uppercase hover:bg-[#FBAF85] focus:outline-offset-4'
                            to='/checkout'
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </Dialog>
            {cartQuantity > 0 ? (
                <span className='bg-dark-orange absolute -top-0.5 -right-0.5 grid size-5 place-content-center rounded-full text-[12px] text-white'>
                    {cartQuantity}
                </span>
            ) : null}
        </div>
    );
};
export default CartIconComp;
