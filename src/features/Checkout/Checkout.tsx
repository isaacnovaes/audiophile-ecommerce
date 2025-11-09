import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import AppContainer from '../../components/AppContainer';
import GoBackButton from '../../components/GoBackButton';
import type { CheckOutForm } from '../../types/checkout';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
    const onValidForm: SubmitHandler<CheckOutForm> = (data) => {
        console.log(data);
    };

    const onInvalidForm: SubmitErrorHandler<CheckOutForm> = (formErrors) => {
        console.error(formErrors);
    };

    return (
        <AppContainer>
            <GoBackButton />
            <CheckoutForm onInvalidForm={onInvalidForm} onValidForm={onValidForm} />
        </AppContainer>
    );
};

export default Checkout;
