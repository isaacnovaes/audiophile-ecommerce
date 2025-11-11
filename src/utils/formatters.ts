const numberFormatter = new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
});

export const formatMoney = (n: number) => numberFormatter.format(n);
