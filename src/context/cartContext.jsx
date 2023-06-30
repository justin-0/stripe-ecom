import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false);

	const value = {
		cartOpen,
		setCartOpen,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};