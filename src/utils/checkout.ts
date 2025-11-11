import type { Cart } from '../types/global';

export const getCartTotals = (cart: Cart[]) => {
    const total = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);
    const shipping = 50;
    const vatPercentage = 0.2;
    const vat = vatPercentage * (total + shipping);
    const grandTotal = total + shipping + vat;

    return { total, shipping, vatPercentage, vat, grandTotal };
};
