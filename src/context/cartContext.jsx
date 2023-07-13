import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAddToCart) => {
	// FIND CART ID MATCHING PRODUCT TO ADD ID
	const foundItem = cartItems.find((item) => item.id === productToAddToCart.id);

	if (foundItem) {
		// MAP OVER STATE AND CHECK IF ITEM ID EQUALS PRODUCT TO ADD ID
		return cartItems.map((cartItem) =>
			/* IF TRUE THEN SPREAD IN ITEMS PROPERTIES, BUT ONLY AMEND QUANTITY VALUE.
		   GET ACCESS TO CURRENT QUANTITY FROM CART STATE THEN INCREASE BY ONE.
		   OTHERWISE JUST RETURN THE ITEM. STATE IS NOT MUTATED, JUST QUANTITY CHANGED */
			cartItem.id === productToAddToCart.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	/* ITEM DOES NOT EXIST THEN COPY PREV STATE, 
	INSERT NEW PRODUCT OBJECT WITH SPREAD AND INCREASE QUANTITY TO 1 */
	return [...cartItems, { ...productToAddToCart, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
	const foundItem = cartItems.find((item) => item.id === productToRemove.id);

	if (foundItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== productToRemove.id);
	}

	if (foundItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
};

const removeFromCart = (cartItems, productToRemove) => {
	const foundItem = cartItems.find((item) => item.id === productToRemove.id);

	if (foundItem) {
		return cartItems.filter((item) => item.id !== productToRemove.id);
	}
};

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartTotal = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity * cartItem.price;
		}, 0);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	const addItemToCart = (productToAddToCart) => {
		setCartItems(addCartItem(cartItems, productToAddToCart));
	};

	const removeItemFromCart = (productToRemoveFromCart) => {
		setCartItems(removeCartItem(cartItems, productToRemoveFromCart));
	};

	const removeAllItemsFromCart = (productToRemoveFromCart) => {
		setCartItems(removeFromCart(cartItems, productToRemoveFromCart));
	};

	const value = {
		cartOpen,
		setCartOpen,
		cartItems,
		setCartItems,
		addItemToCart,
		removeItemFromCart,
		removeAllItemsFromCart,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
