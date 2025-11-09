import z from 'zod';

export const CheckoutFormSchema = z
    .object({
        name: z.string().min(5, 'at least 5 characters'),
        email: z.string().email('invalid email'),
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

export type CheckOutForm = z.infer<typeof CheckoutFormSchema>;
