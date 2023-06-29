import './product.scss';
import Button from '../button/button';

const Product = ({ product }) => {
	const { imageUrl, name, price } = product;
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={name} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button type='inverted'>Add to cart</Button>
		</div>
	);
};

export default Product;
