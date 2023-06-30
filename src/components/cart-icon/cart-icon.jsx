import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ showCart }) => {
	return (
		<div className='cart-icon-container' onClick={showCart}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>10</span>
		</div>
	);
};

export default CartIcon;
