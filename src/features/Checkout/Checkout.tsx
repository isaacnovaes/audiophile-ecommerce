import { zodResolver } from '@hookform/resolvers/zod';
import { Navigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form';
import z from 'zod';
import AppContainer from '../../components/AppContainer';
import Button from '../../components/Button';
import CartItemInfo from '../../components/CartItemInfo';
import FormInput from '../../components/FormInput';
import FormRadioInput from '../../components/FormRadioInput';
import GoBackButton from '../../components/GoBackButton';
import { useCart } from '../../context/CartContext/CartContext';
import SummaryInfo from './SummaryInfo';

const CheckoutFormSchema = z
    .object({
        name: z.string().min(5, 'at least 5 characters'),
        email: z.string().email(),
        phone: z.string().nonempty('required'),
        address: z.string().nonempty('required'),
        zip: z.string().nonempty('required'),
        city: z.string().nonempty('required'),
        country: z.string().nonempty('required'),
        paymentMethod: z.enum(['e-money', 'cash-on-delivery']),
        eMoneyNumber: z.string().optional(),
        eMoneyPin: z.string().optional(),
    })
    .refine(
        ({ paymentMethod, eMoneyNumber }) => {
            if (paymentMethod === 'e-money') {
                return z.string().min(9).safeParse(eMoneyNumber).success;
            }
            return true;
        },
        { path: ['eMoneyNumber'], message: 'at least 9 characters' }
    )
    .refine(
        ({ paymentMethod, eMoneyPin }) => {
            if (paymentMethod === 'e-money') {
                return z.string().min(4).safeParse(eMoneyPin).success;
            }
            return true;
        },
        { path: ['eMoneyPin'], message: 'at least 4  characters' }
    );

type CheckOutForm = z.infer<typeof CheckoutFormSchema>;

const Checkout = () => {
    const cart = useCart();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        unregister,
    } = useForm<CheckOutForm>({
        resolver: zodResolver(CheckoutFormSchema),
        defaultValues: {
            address: '',
            city: '',
            country: '',
            email: '',
            eMoneyNumber: '',
            eMoneyPin: '',
            name: '',
            phone: '',
            paymentMethod: 'cash-on-delivery',
            zip: '',
        },
    });

    const isEMoneySelected = watch('paymentMethod') === 'e-money';

    useEffect(() => {
        if (!isEMoneySelected) {
            unregister(['eMoneyNumber', 'eMoneyPin'], {
                keepError: true,
                keepValue: true,
                keepDirty: true,
            });
        }
    }, [unregister, isEMoneySelected]);

    const onValidForm: SubmitHandler<CheckOutForm> = (data) => {
        console.log(data);
    };

    const onInValidForm: SubmitErrorHandler<CheckOutForm> = (e) => {
        console.error({ e, errors });
    };

    if (cart.length === 0) {
        return <Navigate to='/home' />;
    }

    return (
        <AppContainer>
            <GoBackButton />
            {}
            <form
                className='desktop:flex desktop:gap-x-[30px] desktop:mb-[141px]'
                onSubmit={(e) => void handleSubmit(onValidForm, onInValidForm)(e)}
            >
                <div className='desktop:flex-auto desktop:mb-0 mb-8 rounded-lg bg-white px-6 py-8'>
                    <h4 className='text-h4 mb-8 uppercase'>checkout</h4>

                    <div className='mb-8'>
                        <h5 className='text-dark-orange text-sub-title mb-4 uppercase'>
                            billing details
                        </h5>
                        <div className='tablet:flex tablet:*:flex-[calc(50%-8px)] tablet:flex-wrap tablet:*:grow-0 tablet:gap-x-4'>
                            <FormInput
                                errorMessage={errors.name?.message}
                                label='Name'
                                placeHolder='Alexei Ward'
                                {...register('name')}
                            />
                            <FormInput
                                errorMessage={errors.email?.message}
                                label='Email'
                                placeHolder='alexei.ward@audiophile.com'
                                {...register('email')}
                            />
                            <FormInput
                                errorMessage={errors.name?.message}
                                label='Phone Number'
                                placeHolder='+1 (202) 555-0136'
                                {...register('phone')}
                            />
                        </div>
                    </div>

                    <div className='mb-8'>
                        <h5 className='text-dark-orange text-sub-title mb-4 uppercase'>
                            shipping info
                        </h5>

                        <div className='tablet:flex tablet:*:flex-[calc(50%-8px)] tablet:flex-wrap tablet:*:grow-0 tablet:gap-x-4 tablet:*:first:flex-1 tablet:*:first:basis-full'>
                            <FormInput
                                errorMessage={errors.address?.message}
                                label='Address'
                                placeHolder='1137 Williams Avenue'
                                {...register('address')}
                            />

                            <FormInput
                                errorMessage={errors.zip?.message}
                                label='Zip Code'
                                placeHolder='10001'
                                {...register('zip')}
                            />

                            <FormInput
                                errorMessage={errors.city?.message}
                                label='City'
                                placeHolder='New York'
                                {...register('city')}
                            />

                            <FormInput
                                errorMessage={errors.country?.message}
                                label='Country'
                                placeHolder='United States'
                                {...register('country')}
                            />
                        </div>
                    </div>

                    <div className=''>
                        <h5 className='text-dark-orange text-sub-title mb-4 uppercase'>
                            payment details
                        </h5>

                        <div className='tablet:flex tablet:justify-between tablet:*:flex-[calc(50%-8px)] tablet:gap-x-4 tablet:mb-6'>
                            <h6 className='t-6 mb-4 text-[12px] font-bold tracking-[-0.21px] uppercase'>
                                payment method
                            </h6>

                            <div>
                                <FormRadioInput
                                    label='e-Money'
                                    value='e-money'
                                    {...register('paymentMethod')}
                                />

                                <FormRadioInput
                                    label='Cash on Delivery'
                                    value='cash-on-delivery'
                                    {...register('paymentMethod')}
                                />
                            </div>
                        </div>

                        <div className='tablet:flex tablet:gap-x-4 tablet:*:flex-1/2'>
                            {isEMoneySelected ? (
                                <>
                                    <FormInput
                                        errorMessage={errors.eMoneyNumber?.message}
                                        label='e-Money Number'
                                        placeHolder='238521993'
                                        {...register('eMoneyNumber')}
                                    />

                                    <FormInput
                                        errorMessage={errors.eMoneyPin?.message}
                                        label='e-Money PIN'
                                        placeHolder='6891'
                                        {...register('eMoneyPin')}
                                    />
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className='desktop:w-[350px] desktop:self-start tablet:mb-[116px] mb-[97px] rounded-lg bg-white px-6 py-8'>
                    <h6 className='text-h6 mb-[31px] uppercase'>summary</h6>
                    <div className='space-y-4'>
                        {cart.map((c) => (
                            <div key={c.item.id} className='grid grid-cols-[64px_1fr_64px] gap-x-4'>
                                <CartItemInfo cart={c} />
                                <span className='text-body self-center text-right text-black/50'>
                                    x{c.quantity}
                                </span>
                            </div>
                        ))}
                    </div>
                    <SummaryInfo cart={cart} />
                    <Button label='continue & pay' type='submit' />
                </div>
            </form>
        </AppContainer>
    );
};

export default Checkout;
