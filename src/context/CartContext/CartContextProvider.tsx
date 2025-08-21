import { useCallback, useMemo, useState, type ReactNode } from 'react';
import type { Cart, Product } from '../../types/global';
import { CartContext, type TCartContext } from './CartContext';

export const CartContextProvider = (props: { readonly children: ReactNode }) => {
    const [cart, setCart] = useState<Map<string, Cart>>(new Map());

    const addCartProduct = useCallback((product: Product) => {
        setCart((c) => {
            const newCart = structuredClone(c);
            if (c.has(product.name)) {
                const existingProduct = newCart.get(product.name);
                if (existingProduct) {
                    existingProduct.quantity++;
                    return newCart;
                }
                return c;
            }

            newCart.set(product.name, { item: product, quantity: 1 });
            return newCart;
        });
    }, []);

    const removeCartProduct = useCallback((product: Product) => {
        setCart((c) => {
            if (c.has(product.name)) {
                const newCart = structuredClone(c);
                const existingProduct = newCart.get(product.name);
                if (existingProduct) {
                    existingProduct.quantity--;
                    if (existingProduct.quantity <= 0) {
                        newCart.delete(product.name);
                    }
                    return newCart;
                }
            }

            return c;
        });
    }, []);

    const removeAllCartProducts = useCallback(() => {
        setCart(new Map());
    }, []);

    const context: TCartContext = useMemo(
        () => ({ cart, addCartProduct, removeCartProduct, removeAllCartProducts }),
        [addCartProduct, cart, removeCartProduct, removeAllCartProducts]
    );

    return <CartContext value={context}>{props.children}</CartContext>;
};
