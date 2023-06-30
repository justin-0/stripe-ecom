import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import './product.scss';

import Button from '../button/button';

const Product = ({ product }) => {
	const { addItemToCart } = useContext(CartContext);
	const { imageUrl, name, price } = product;

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={name} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button type='inverted' onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export default Product;
