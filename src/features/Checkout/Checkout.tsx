import { getRouteApi } from '@tanstack/react-router';
import { useRef } from 'react';
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import AppContainer from '../../components/AppContainer';
import Dialog from '../../components/Dialog';
import GoBackButton from '../../components/GoBackButton';
import { useRemoveAllCartProducts } from '../../context/CartContext/CartContext';
import type { CheckOutForm } from '../../types/checkout';
import CheckoutDialogContent from './CheckoutDialogContent';
import CheckoutForm from './CheckoutForm';

const CheckoutRoute = getRouteApi('/checkout');

const Checkout = () => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const removeAllCartProducts = useRemoveAllCartProducts();
    const navigate = CheckoutRoute.useNavigate();

    const onValidForm: SubmitHandler<CheckOutForm> = (_formData) => {
        document.body.scrollIntoView();
        dialogRef.current?.showModal();
    };

    const onInvalidForm: SubmitErrorHandler<CheckOutForm> = (formErrors) => {
        console.error(formErrors);
    };

    return (
        <AppContainer>
            <GoBackButton />
            <CheckoutForm onInvalidForm={onInvalidForm} onValidForm={onValidForm} />
            <Dialog
                dialogRef={dialogRef}
                onClose={() => {
                    removeAllCartProducts();
                    void navigate({ to: '/home' });
                }}
            >
                <CheckoutDialogContent dialogRef={dialogRef} />
            </Dialog>
        </AppContainer>
    );
};

export default Checkout;
