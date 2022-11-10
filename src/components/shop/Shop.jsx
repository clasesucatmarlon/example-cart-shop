import React from 'react';
import { PropTypes } from 'prop-types';
import Products from '../products/Products';

const Shop = ({ allProducts }) => {
	return (
		<div>
			<h1>Store</h1>
			<Products allProducts={allProducts} />
		</div>
	);
};

Shop.propTypes = {
	allProducts: PropTypes.array.isRequired,
};

export default Shop;
