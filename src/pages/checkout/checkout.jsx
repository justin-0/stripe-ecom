import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import './checkout.scss';

const Checkout = () => {
	const { cartItems, setCartOpen } = useContext(CartContext);

	useEffect(() => {
		setCartOpen(false);
	}, []);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map((item) => {
				return (
					<CheckoutItem key={item.id} cartItem={item} />
					// <div key={id}>
					// 	<h2>{name}</h2>
					// 	<span>{quantity}</span>
					// 	<span onClick={() => removeItemFromCart(item)}>decrease</span>
					// 	<span onClick={() => addItemToCart(item)}>increase</span>
					// </div>
				);
			})}
			<span className='total'>Total:</span>
		</div>
	);
};

export default Checkout;
