import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const KosarbaHelyez = useCallback((item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.alt === item.alt);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.alt === item.alt ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    }, []);

    const TermekEltavolitasa = useCallback((index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, KosarbaHelyez, TermekEltavolitasa, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default CartContext;