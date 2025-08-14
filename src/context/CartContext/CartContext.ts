import { createContext, useContext } from 'react';
import type { Cart, Product } from '../../types/global';

export const CartContext = createContext<{
    cart: Map<string, Cart>;
    addCartProduct: (product: Product) => void;
    removeCartProduct: (product: Product) => void;
} | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('There is no CartContextProvider');
    }

    const { cart } = context;

    return cart;
};

export const useAddCartProduct = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('There is no CartContextProvider');
    }

    const { addCartProduct } = context;

    return addCartProduct;
};

export const useRemoveCartProduct = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('There is no CartContextProvider');
    }

    const { removeCartProduct } = context;

    return removeCartProduct;
};
