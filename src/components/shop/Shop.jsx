import React from 'react';
import { PropTypes } from 'prop-types';
import Products from '../products/Products';

const Shop = ({ allProducts, addToCart }) => {
	return (
		<div>
			<h1>Store</h1>
			<Products allProducts={allProducts} addToCart={addToCart} />
		</div>
	);
};

Shop.propTypes = {
	allProducts: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired,
};

export default Shop;
