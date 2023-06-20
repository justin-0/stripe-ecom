import Category from '../category/category';
import './directory.scss';

const Directory = ({ categories }) => {
	return (
		<div className='categories-container'>
			{categories.map(({ id, title, imageUrl }) => (
				<Category key={id} title={title} imageUrl={imageUrl} />
			))}
		</div>
	);
};

export default Directory;
