import { createContext, useState } from 'react';
import shopProducts from '../shop-data.json';

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(shopProducts);

	const value = {
		products,
		setProducts,
	};

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
