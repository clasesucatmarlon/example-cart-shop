import React from 'react';
import { PropTypes } from 'prop-types';
import Products from '../products/Products';

const Shop = ({ addToCart }) => {
	return (
		<div>
			<h1>Store</h1>
			<Products addToCart={addToCart} />
		</div>
	);
};

Shop.propTypes = {
	addToCart: PropTypes.func.isRequired,
};

export default Shop;
