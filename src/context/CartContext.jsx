import React, { createContext, useState, useContext } from 'react';

// Skapa context
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (cat) => {
        // Kontrollera om katten redan finns i varukorg
        const existingCat = cart.find((item) => item.id === cat.id);

        if (existingCat) {
            // Om redan finns, öka mängden
            setCart(
                cart.map((item) =>
                    item.id === cat.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            // Lägg till ny katt
            setCart([...cart, { ...cat, quantity: 1 }]);
        }
    };

    const removeFromCart = (catId) => {
        setCart(cart.filter((item) => item.id !== catId));
    };

    const updateQuantity = (catId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(catId);
        } else {
            setCart(
                cart.map((item) =>
                    item.id === catId ? { ...item, quantity } : item
                )
            );
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.length;
    const cartCost = cart.reduce((sum, item) => sum + (item.price || 299) * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCost,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Hook för att använda cart-context
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart måste användas inom CartProvider');
    }
    return context;
}