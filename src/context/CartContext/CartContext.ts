import { createContext, useContext } from 'react';
import type { Cart, Product } from '../../types/global';

export type TCartContext = {
    cart: Map<string, Cart>;
    addCartProduct: (product: Product) => void;
    removeCartProduct: (product: Product) => void;
    removeAllCartProducts: () => void;
};

export const CartContext = createContext<TCartContext | null>(null);

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

export const useRemoveAllCartProducts = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('There is no CartContextProvider');
    }

    const { removeAllCartProducts } = context;

    return removeAllCartProducts;
};
