import type { Cart } from '../../types/global';
import { formatMoney } from '../../utils/formatters';

const SummaryInfoRow = (props: { readonly title: string; readonly price: number }) => {
    return (
        <div className='flex items-center justify-between'>
            <span className='text-body text-black/50 uppercase'>{props.title}</span>
            <span className='text-[18px] font-bold text-black tabular-nums'>
                {formatMoney(props.price)}
            </span>
        </div>
    );
};

const SummaryInfo = (props: { readonly cart: Cart[] }) => {
    const total = props.cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);
    const shipping = 50;
    const vatPercentage = 0.2;
    const vat = vatPercentage * (total + shipping);
    const grandTotal = total + shipping + vat;

    return (
        <div className='my-8'>
            <SummaryInfoRow price={total} title='total' />
            <SummaryInfoRow price={shipping} title='shipping' />
            <SummaryInfoRow price={vat} title='vat (included)' />
            <SummaryInfoRow price={grandTotal} title='grand total' />
        </div>
    );
};
export default SummaryInfo;
