import './cart-dropdown.scss';

import { CartContext } from '../../context/cartContext';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((product) => (
					<CartItem key={product.id} cartItem={product} />
				))}
			</div>
			<Button onClick={() => navigate('/checkout')}>CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
