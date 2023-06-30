import './cart-dropdown.scss';

import { CartContext } from '../../context/cartContext';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((product) => (
					<CartItem key={product.id} cartItem={product} />
				))}
			</div>
			<Button>CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
