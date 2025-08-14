export const formatMoney = (n: number) =>
    new Intl.NumberFormat('us', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
    }).format(n);
