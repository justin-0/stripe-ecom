import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ showCart }) => {
	const { cartItems } = useContext(CartContext);

	const totalItems = cartItems.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	return (
		<div className='cart-icon-container' onClick={showCart}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{totalItems}</span>
		</div>
	);
};

export default CartIcon;
