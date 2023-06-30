import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';

import './checkout.scss';

const Checkout = () => {
	const { cartItems, setCartOpen, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	useEffect(() => {
		setCartOpen(false);
	}, []);

	return (
		<div>
			<div>
				{cartItems.map((item) => {
					const { id, name, quantity } = item;

					return (
						<div key={id}>
							<h2>{name}</h2>
							<span>{quantity}</span>
							<span onClick={() => removeItemFromCart(item)}>decrease</span>
							<span onClick={() => addItemToCart(item)}>increase</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Checkout;
